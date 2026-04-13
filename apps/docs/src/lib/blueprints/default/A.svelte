<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { ExternalLink } from '@foxui/all/icons';

	let { href, children, ...restProps }: HTMLAnchorAttributes & { children: Snippet } = $props();

	const isExternal = $derived(!href?.startsWith('/'));
	const target = $derived(isExternal ? '_blank' : undefined);
</script>

<a {href} {target} class="inline-flex items-center justify-center gap-1" {...restProps}>
	{@render children?.()}
	{#if isExternal}
		<ExternalLink size={16} strokeWidth={2} />
	{/if}
</a>
