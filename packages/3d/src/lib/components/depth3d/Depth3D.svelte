<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene, { type Props } from './Scene.svelte';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@fuxui/base';

	const {
		class: className,
		sceneProps,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		sceneProps: Props;
	} = $props();
</script>

<div id="depth3d" class={cn('h-80 w-80', className)} {...restProps}>
	<Canvas>
		<Scene {...sceneProps} />
	</Canvas>
</div>

<!-- no js fallback -->
<noscript>
	<style>
		#depth3d {
			display: none;
		}
	</style>

	<img
		src={sceneProps.image.image}
		alt=""
		class={cn('h-80 w-80 rounded-2xl object-cover', className)}
	/>
</noscript>
