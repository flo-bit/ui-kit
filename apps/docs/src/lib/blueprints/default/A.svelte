<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let { href, children, ...restProps }: HTMLAnchorAttributes & { children: Snippet } = $props();

	const isExternal = $derived(!href?.startsWith('/'));
	const target = $derived(isExternal ? '_blank' : undefined);
</script>

<a {href} {target} class="inline-flex items-center justify-center gap-1" {...restProps}>
	{@render children?.()}
	{#if isExternal}
		<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			/>
		</svg>
	{/if}
</a>
