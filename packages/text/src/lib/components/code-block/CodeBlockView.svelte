<script lang="ts">
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper, NodeViewContent } from 'svelte-tiptap';

	let props: NodeViewProps = $props();

	// Copy
	let copied = $state(false);

	async function copyCode() {
		const text = props.node.textContent;
		await navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<NodeViewWrapper
	as="pre"
	class="code-block group/code-block relative my-4 overflow-hidden rounded-ui font-mono text-sm {props.selected
		? 'ring-2 ring-accent-500'
		: ''}"
>
	<!-- Toolbar -->
	<div
		class="absolute right-2 top-2 z-10 flex items-center gap-1 opacity-0 transition-opacity group-hover/code-block:opacity-100"
		contenteditable="false"
	>
		<!-- Copy button -->
		<button
			type="button"
			class="cursor-pointer rounded-ui-sm border border-base-300 bg-base-100 p-1 text-base-600 transition-colors hover:bg-base-200 dark:border-base-600 dark:bg-base-800 dark:text-base-400 dark:hover:bg-base-700"
			onclick={copyCode}
		>
			{#if copied}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-3.5 text-green-500"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-3.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<!-- Code content -->
	<NodeViewContent as="code" class="block overflow-x-auto p-4 pt-10" />
</NodeViewWrapper>
