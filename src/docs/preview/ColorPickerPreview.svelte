<script lang="ts">
	import { ColorPicker } from '$lib/components/extra/color-picker/base';
	import * as Popover from '$lib/components/base/popover';
	import { cn } from '$lib/utils';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Button from '$lib/components/base/button/Button.svelte';
	import type { SetColorFunction } from '$lib/components/extra/color-picker/base/color';

	let setColor: SetColorFunction | undefined = $state(undefined);

	let okchl = $state({
		l: 0,
		c: 0,
		h: 0
	});

	let okhsv = $state({
		h: 0,
		s: 0,
		v: 0
	});

	$inspect(okchl);
</script>

<Subheading class="mb-4">Color Picker</Subheading>

<Popover.Root>
	<Popover.Trigger class={cn('cursor-pointer')}>
		<div
			class="border-base-300 dark:border-base-700 z-10 size-8 rounded-full border"
			style={`background-color: oklch(${okchl.l} ${okchl.c} ${okchl.h});`}
		></div>
	</Popover.Trigger>
	<Popover.Content side="bottom" sideOffset={10}>
		<ColorPicker
			bind:setColor
			onchange={(color) => {
				console.log(color);
				okchl = color.oklch;
			}}
			bind:okhsv
		/>
	</Popover.Content>
</Popover.Root>

<Button
	onclick={() => {
		setColor?.('#ff0000');
	}}>Reset Color</Button
>
