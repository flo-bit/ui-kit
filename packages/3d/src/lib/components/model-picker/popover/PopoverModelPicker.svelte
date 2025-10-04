<script lang="ts">
	import { ModelPicker } from '../';
	import { Popover } from '@foxui/core';

	let {
		items,
		open = $bindable(false),
		alwaysRotate = false,
		onselect,
		canvasClasses = '',
		triggerClasses = '',
		title
	}: {
		open?: boolean;
		items: { path: string; label: string }[];
		alwaysRotate?: boolean;
		onselect?: ({ path, label }: { path: string; label: string }) => void;
		canvasClasses?: string;
		triggerClasses?: string;
		title?: string;
	} = $props();
</script>

<Popover
	bind:open
	{triggerClasses}
	side={'top'}
	sideOffset={10}
	triggerText={title}
	class="mx-2 max-h-[60dvh] w-full max-w-[calc(100vw-1rem)] overflow-y-scroll"
>
	<ModelPicker
		{items}
		{alwaysRotate}
		onselect={({ path, label }) => {
			onselect?.({ path, label });
			open = false;
		}}
		{canvasClasses}
	/>
</Popover>
