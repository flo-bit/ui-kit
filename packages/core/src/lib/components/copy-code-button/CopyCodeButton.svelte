<script lang="ts">
	import { cn } from '../../utils';
	import { Portal } from 'bits-ui';
	import { Copy, Check } from '@jis3r/icons';

	let { element, text }: { element: HTMLElement; text?: string } = $props();

	let copied = $state(false);
	let hovered = $state(false);

	async function clickedCopy() {
		if (!text) {
			text = element.innerText;
		}

		await navigator.clipboard.writeText(text);

		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<Portal to={element}>
	{#if !copied}
		<button
			class={cn(
				'not-prose focus-visible:outline-base-600 dark:focus-visible:outline-base-400 cursor-pointer focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2',
				'bg-base-200 inline-flex size-8 items-center justify-center p-1 transition-opacity duration-150 group-hover:opacity-100 [@media(pointer:fine)]:opacity-0',
				'dark:bg-base-800 border-base-400 dark:border-base-700 dark:hover:bg-base-700 hover:bg-base-300 absolute top-3 right-3 rounded-ui border'
			)}
			onclick={clickedCopy}
			onmouseenter={() => (hovered = true)}
			onmouseleave={() => (hovered = false)}
		>
			<Copy size={18} strokeWidth={1.5} animate={hovered} />
			<span class="sr-only">copy code</span>
		</button>
	{:else}
		<div
			class={cn(
				'bg-accent-500/10 border-accent-500/20 text-accent-600 dark:text-accent-400 absolute top-3 right-3',
				'inline-flex size-8 items-center justify-center rounded-ui border p-1 transition-opacity duration-500'
			)}
		>
			<Check size={18} strokeWidth={1.5} animate />
		</div>
	{/if}
</Portal>
