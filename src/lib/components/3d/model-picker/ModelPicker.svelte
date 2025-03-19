<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { View } from '@threlte/extras';
	import Scene from './ModelPickerScene.svelte';
	import Modal from '$lib/components/base/modal/Modal.svelte';
	import { Portal } from 'bits-ui';

	let {
		items,
		open = $bindable(),
		alwaysRotate = false,
		title,
		onselect
	}: {
		open: boolean;
		items: { path: string; label: string }[];
		alwaysRotate?: boolean;
		onselect?: ({ path, label }: { path: string; label: string }) => void;
		title?: string;
	} = $props();

	let states = $state(
		new Array<{ hover: boolean; dom: HTMLElement | undefined }>(items.length).fill({
			hover: false,
			dom: undefined
		})
	);
</script>

<Modal bind:open class="mx-auto max-h-[100dvh] max-w-5xl overflow-hidden overflow-y-scroll" {title}>
	<div
		class="relative mx-auto grid h-full w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each items as item, index}
			<button
				id="item"
				class="hover:bg-base-200/40 dark:hover:bg-base-800/40 m-4 inline-block cursor-pointer rounded-2xl p-4 transition-all duration-300 hover:scale-105"
				onclick={() => {
					open = false;
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
</Modal>

<Portal>
	<div class="pointer-events-none fixed top-0 z-[1000] h-full w-full">
		<Canvas>
			{#each items as item, index}
				<View dom={states[index].dom}>
					<Scene path={item.path} hover={states[index].hover || alwaysRotate} />
				</View>
			{/each}
		</Canvas>
	</div>
</Portal>
