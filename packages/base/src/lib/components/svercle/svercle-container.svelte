<script lang="ts">
	import type { Snippet } from 'svelte';
	import Svercle from './svercle.svelte';
	import { cn } from '../../utils';

	let {
		curve = 5,
		anchor = 0,
		fill = '#f00',
		stroke = 'red',
		children,
		class: className,
		...restProps
	}: {
		curve?: number;
		anchor?: number;
		fill?: string;
		stroke?: string;
		children?: Snippet;
		class?: string;
	} = $props();
</script>

<div
	class={cn(
		'relative grid h-full w-full place-items-center [&_svg]:absolute [&_svg]:left-0 [&_svg]:top-0 [&_svg]:z-[-1] [&_svg]:h-full [&_svg]:w-full',
		className
	)}
	{...restProps}
>
	<Svercle {curve} {anchor} {fill} {stroke} />
	{@render children?.()}
</div>
