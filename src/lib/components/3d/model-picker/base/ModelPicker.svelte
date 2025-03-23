<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { View } from '@threlte/extras';
	import Scene from './ModelPickerScene.svelte';
	import { Portal } from 'bits-ui';
	import { cn } from '$lib';
	import { ACESFilmicToneMapping, CineonToneMapping } from 'three';

	let {
		items,
		alwaysRotate = false,
		onselect,
		canvasClasses = '',
		class: className,
		gridClasses,
		maxColumns = 4
	}: {
		items: { path: string; label: string }[];
		alwaysRotate?: boolean;
		onselect?: ({ path, label }: { path: string; label: string }) => void;
		canvasClasses?: string;
		portalTo?: string;
		class?: string;
		gridClasses?: string;
		maxColumns?: number;
	} = $props();

	let states = $state(
		new Array<{ hover: boolean; dom: HTMLElement | undefined }>(items.length).fill({
			hover: false,
			dom: undefined
		})
	);
</script>

<div class={cn('relative h-full w-full', className)}>
	<div
		class={cn(
			'grid h-full w-full grid-cols-2 gap-4',
			maxColumns > 2 ? 'md:grid-cols-3' : '',
			maxColumns > 3 ? 'lg:grid-cols-4' : '',
			gridClasses
		)}
	>
		{#each items as item, index}
			<button
				id="item"
				class="hover:bg-base-200/40 dark:hover:bg-base-800/40 m-4 inline-block cursor-pointer rounded-2xl p-4 transition-all duration-300 hover:scale-105"
				onclick={() => {
					states[index].hover = false;
					onselect?.({ path: item.path, label: item.label });
				}}
				onpointerenter={() => {
					states[index].hover = true;
				}}
				onpointerleave={() => {
					states[index].hover = false;
				}}
			>
				<div class="aspect-square" bind:this={states[index].dom}></div>
				<div class="text-base-700 dark:text-base-300 text-sm">{item.label}</div>
			</button>
		{/each}
	</div>

	<div class={cn('pointer-events-none absolute inset-0 h-full w-full', canvasClasses)}>
		<Canvas toneMapping={CineonToneMapping}>
			{#each items as item, index}
				<View dom={states[index].dom}>
					<Scene path={item.path} hover={states[index].hover || alwaysRotate} />
				</View>
			{/each}
		</Canvas>
	</div>
</div>
