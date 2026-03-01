<script lang="ts" module>
	export const atProtoLoginModalState = $state({
		open: false,
		show: () => (atProtoLoginModalState.open = true),
		hide: () => (atProtoLoginModalState.open = false)
	});
</script>

<script lang="ts">
	import { Button, Modal, Subheading, Avatar } from '@foxui/core';
	import { AtprotoHandlePopup } from '../atproto-handle-popup';
	import type { Profile } from '../atproto-handle-popup/helper';
	import { saveRecentLogin, type ATProtoLoginProps } from '.';
	import { onMount, tick } from 'svelte';

	let value = $state('');
	let error: string | null = $state(null);
	let loading = $state(false);

	let {
		login,
		signup,
		formAction,
		formMethod = 'get',
		loginOnSelect = true
	}: ATProtoLoginProps & { loginOnSelect?: boolean } = $props();

	let selectedActor: Profile | undefined = $state();
	let recentLogins: Record<string, Profile> = $state({});
	let recentLoginsView = $state(true);
	let input: HTMLInputElement | null = $state(null);
	let submitButton: HTMLButtonElement | null = $state(null);

	let showRecentLogins = $derived(
		Object.keys(recentLogins).length > 0 && !loading && !selectedActor && recentLoginsView
	);

	onMount(() => {
		try {
			recentLogins = JSON.parse(localStorage.getItem('recent-logins') || '{}');
		} catch {
			// ignore parse errors
		}
	});

	$effect(() => {
		if (!atProtoLoginModalState.open) {
			error = null;
			value = '';
			loading = false;
			selectedActor = undefined;
			recentLoginsView = true;
		} else {
			focusInput();
		}
	});

	function focusInput() {
		tick().then(() => input?.focus());
	}

	function focusSubmit() {
		tick().then(() => submitButton?.focus());
	}

	function removeRecentLogin(did: string) {
		const { [did]: _, ...rest } = recentLogins;
		recentLogins = rest;
		try {
			localStorage.setItem('recent-logins', JSON.stringify(recentLogins));
		} catch {
			// ignore storage errors
		}
	}

	async function onLogin(handle: string) {
		if (loading || !login) return;
		loading = true;
		error = null;
		try {
			const hide = await login(handle);
			if (hide) {
				atProtoLoginModalState.hide();
				value = '';
			}
		} catch (err) {
			error = err instanceof Error ? err.message : String(err);
		} finally {
			loading = false;
		}
	}

	async function onSubmit(evt?: Event) {
		if (formAction || !login) return;
		evt?.preventDefault();
		await onLogin(value);
	}

	function handleActorSelected(actor: Profile) {
		selectedActor = actor;
		value = actor.handle;

		if (loginOnSelect) onSubmit();
		else focusSubmit();
	}
</script>

<Modal
	bind:open={atProtoLoginModalState.open}
	class="max-w-sm gap-2 p-4 sm:p-6"
	onOpenAutoFocus={(e: Event) => {
		e.preventDefault();
		input?.focus();
	}}
>
	<form
		onsubmit={(e) => onSubmit(e)}
		action={formAction}
		method={formMethod}
		class="flex flex-col gap-2"
	>
		<Subheading class="inline-flex items-center gap-2 font-bold">
			Login with your internet handle
		</Subheading>
		<div class="mt-1 text-xs font-light text-neutral-800 dark:text-neutral-200">
			like your bluesky account
		</div>

		{#if showRecentLogins}
			<div class="mt-2 mb-2 text-sm font-medium">Recent logins</div>

			<div class="flex flex-col gap-2">
				{#each Object.values(recentLogins)
					.filter((l) => l.handle && l.handle !== 'handle.invalid')
					.slice(0, 4) as recentLogin (recentLogin.did)}
					<div
						class="bg-base-100 hover:bg-base-200 dark:bg-base-700 dark:hover:bg-base-600 border-base-300 dark:border-base-600 group relative flex h-10 w-full items-center justify-between gap-2 rounded-full border px-3 font-semibold transition-colors duration-100"
					>
						<div class="flex items-center gap-2">
							<Avatar src={recentLogin.avatar} class="size-6" />
							{recentLogin.handle}
						</div>
						<button
							type="button"
							class="absolute inset-0 z-0 cursor-pointer"
							onclick={() => handleActorSelected(recentLogin)}
						>
							<span class="sr-only">login as {recentLogin.handle}</span>
						</button>
						<button
							type="button"
							class="relative z-10 cursor-pointer rounded-full p-0.5"
							onclick={(e) => {
								e.stopPropagation();
								removeRecentLogin(recentLogin.did);
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-3"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
							<span class="sr-only">remove</span>
						</button>
					</div>
				{/each}
			</div>
		{:else if !selectedActor}
			<div class="mt-4 w-full">
				<AtprotoHandlePopup bind:value onselected={handleActorSelected} bind:ref={input} />
			</div>
		{:else}
			<div
				class="bg-base-100 dark:bg-base-700 border-base-300 dark:border-base-600 mt-4 flex h-10 w-full items-center justify-between gap-2 rounded-full border px-3 font-semibold"
			>
				<div class="flex items-center gap-2">
					<Avatar src={selectedActor.avatar} class="size-6" />
					{selectedActor.handle}
				</div>
				<button
					type="button"
					class="cursor-pointer rounded-full p-0.5"
					onclick={() => {
						selectedActor = undefined;
						value = '';
						focusInput();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-3"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
					<span class="sr-only">clear selection</span>
				</button>
			</div>
		{/if}

		{#if error}
			<p class="text-accent-500 mt-2 text-sm font-medium">{error}</p>
		{/if}

		<div class="mt-2">
			{#if showRecentLogins}
				<div class="mt-2 mb-4 text-sm font-medium">Or login with new handle</div>

				<Button
					onclick={() => {
						recentLoginsView = false;
						focusInput();
					}}
					class="w-full"
				>
					Login with new handle
				</Button>
			{:else}
				<Button bind:ref={submitButton} type="submit" class="w-full" disabled={loading}>
					{loading ? 'Loading...' : 'Login'}
				</Button>
			{/if}
		</div>

		{#if signup}
			<div
				class="border-base-200 dark:border-base-800 text-base-800 dark:text-base-200 mt-2 flex flex-col gap-3 border-t text-sm leading-7 pt-2"
			>
				<span class="text-sm font-medium">Don't have an account?</span>
				<Button onclick={() => signup?.()} variant="secondary">Sign Up</Button>
			</div>
		{/if}
	</form>
</Modal>
