<script lang="ts">
	import { cn } from '@foxui/core';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Lottie } from '../lottie';

	let {
		loop = true,
		autoplay = true,
		colorMap,
		class: className,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		loop?: boolean;
		autoplay?: boolean;
		colorMap?: Record<string, string>;
	} = $props();

	let data = $state.raw<unknown>(null);

	$effect(() => {
		let cancelled = false;
		import('./atmosphere.lottie.json').then((m) => {
			if (!cancelled) data = m.default;
		});
		return () => {
			cancelled = true;
		};
	});
</script>

{#if data}
	<Lottie {data} {loop} {autoplay} {colorMap} class={cn('aspect-video w-full', className)} {...rest} />
{:else}
	<div class={cn('aspect-video w-full', className)} aria-hidden="true" {...rest}></div>
{/if}
