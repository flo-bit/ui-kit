<script lang="ts" module>
	export const atProtoLoginModalState = $state({
		open: false,
		show: () => (atProtoLoginModalState.open = true),
		hide: () => (atProtoLoginModalState.open = false)
	});
</script>

<script lang="ts">
	import { Button, Modal, Subheading, Input, Avatar } from '@foxui/core';
	import type { ATProtoLoginProps } from '.';

	let value = $state('');
	let error: string | null = $state(null);
	let loading = $state(false);

	let { login, signup, formAction, formMethod = 'get' }: ATProtoLoginProps = $props();

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

	async function onSubmit(evt: Event) {
		if (formAction || !login) return;
		evt.preventDefault();

		await onLogin(value);
	}

	let input: HTMLInputElement | null = $state(null);

	let lastLogin: { handle: string; avatar: string } | null = $state(null);

	$effect(() => {
		let lastLoginDid = localStorage.getItem('last-login');

		if (lastLoginDid) {
			let profile = localStorage.getItem(`profile-${lastLoginDid}`);

			if (profile) {
				lastLogin = JSON.parse(profile);
			}
		}
	});
</script>

<Modal
	bind:open={atProtoLoginModalState.open}
	class="max-w-sm gap-2 p-4 sm:p-6"
	onOpenAutoFocus={(e: Event) => {
		e.preventDefault();
		input?.focus();
	}}
>
	<form onsubmit={onSubmit} action={formAction} method={formMethod} class="flex flex-col gap-2">
		<Subheading class="inline-flex items-center gap-2 font-bold">
			Login with your internet handle</Subheading
		>
		<div class="mt-1 text-xs font-light text-neutral-800 dark:text-neutral-200">
			e.g. your bluesky account
		</div>

		{#if lastLogin}
			<Button
				class="max-w-xs justify-start truncate overflow-x-hidden"
				variant="primary"
				onclick={() => onLogin(lastLogin?.handle ?? '')}
				disabled={loading}
			>
				<Avatar src={lastLogin.avatar} class="size-6" />

				<div
					class="text-accent-600 dark:text-accent-400 text-md max-w-full truncate overflow-x-hidden font-semibold"
				>
					<p>{loading ? 'Loading...' : lastLogin.handle}</p>
				</div>
			</Button>
		{/if}

		<div class="mt-4 w-full">
			<div class="mt-2">
				<Input
					bind:ref={input}
					type="text"
					placeholder="you.bsky.social"
					class="w-full"
					bind:value
				/>
			</div>
		</div>

		{#if error}
			<p class="text-accent-500 mt-2 text-sm font-medium">{error}</p>
		{/if}

		<Button type="submit" class="mt-2 ml-auto w-full" disabled={loading}
			>{loading ? 'Loading...' : 'Login'}</Button
		>
		{#if signup}
			<div
				class="border-base-200 dark:border-base-800 text-base-800 dark:text-base-200 mt-4 flex flex-col gap-3 border-t pt-4 text-sm leading-7"
			>
				<span>Don't have an account?</span>
				<Button
					onclick={() => {
						signup?.();
					}}
					variant="secondary">Sign Up</Button
				>
			</div>
		{/if}
	</form>
</Modal>
