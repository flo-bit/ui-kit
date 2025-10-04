<script lang="ts">
	import { cn } from '@foxui/core';
	import type { Snippet } from 'svelte';

	let { code, children }: { code: string; children: Snippet } = $props();

	let copied = $state(false);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="not-prose group relative isolate">
	<div class="absolute right-2 top-8 z-10">
		{#if !copied}
			<button
				class={cn(
					'not-prose focus-visible:outline-base-600 dark:focus-visible:outline-base-400 cursor-pointer focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2',
					'bg-base-200 inline-flex size-8 items-center justify-center p-1 transition-opacity duration-150 group-hover:opacity-100 [@media(pointer:fine)]:opacity-0',
					'dark:bg-base-800 border-base-400 dark:border-base-700 dark:hover:bg-base-700 hover:bg-base-300 rounded-2xl border'
				)}
				onclick={copyToClipboard}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
					/>
				</svg>

				<span class="sr-only">copy code</span>
			</button>
		{:else}
			<div
				class={cn(
					'bg-accent-500/10 border-accent-500/20 text-accent-600 dark:text-accent-400',
					'inline-flex size-8 items-center justify-center rounded-2xl border p-1 transition-opacity duration-500'
				)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
			</div>
		{/if}
	</div>
	{@render children?.()}
</div>
