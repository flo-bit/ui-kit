<script lang="ts">
	import { cn, ModelPicker } from '$lib';
	import { buttonVariants } from '$lib/components/base/button';
	import * as Popover from '$lib/components/base/popover';

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

	let ref = $state(null);
</script>

<Popover.Root bind:open>
	<Popover.Trigger class={cn(buttonVariants(), triggerClasses)}>
		{title}
	</Popover.Trigger>
	<Popover.Content
		side={'top'}
		sideOffset={10}
		class="max-h-[60dvh] w-full max-w-[calc(100vw-1rem)] overflow-y-scroll mx-2"
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
	</Popover.Content>
</Popover.Root>
