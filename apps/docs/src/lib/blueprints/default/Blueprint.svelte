<script lang="ts" module>
	export { default as pre } from './Pre.svelte';
	export { default as a } from './A.svelte';
</script>

<script lang="ts">
	let { children } = $props();
</script>

{@render children?.()}

<style>
	:global(html.dark .shiki),
	:global(html.dark .shiki span) {
		color: var(--shiki-dark) !important;
		background-color: var(--base-800) !important;
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
		text-decoration: var(--shiki-dark-text-decoration) !important;
	}

	:global(html pre.shiki) {
		border-radius: var(--radius-2xl);
		padding: calc(var(--spacing) * 4);
		overflow-x: auto;
		border: 1px solid var(--base-200);
	}
	:global(html.dark pre.shiki) {
		border: 1px solid var(--base-700);
	}
</style>
