<script lang="ts">
	import { cn, Modal } from '$lib';
	import ModelPicker from '../base/ModelPicker.svelte';

	let {
		items,
		open = $bindable(),
		alwaysRotate = false,
		onselect,
		canvasClasses = '',
		title
	}: {
		open: boolean;
		items: { path: string; label: string }[];
		alwaysRotate?: boolean;
		onselect?: ({ path, label }: { path: string; label: string }) => void;
		canvasClasses?: string;
		title?: string;
	} = $props();
</script>

<Modal bind:open class="mx-auto max-h-[80dvh] max-w-5xl overflow-hidden overflow-y-scroll" {title}>
	<ModelPicker
		{items}
		{alwaysRotate}
		onselect={({ path, label }) => {
			onselect?.({ path, label });
			open = false;
		}}
		{canvasClasses}
	/>
</Modal>
