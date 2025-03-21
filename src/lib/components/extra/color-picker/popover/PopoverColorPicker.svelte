<script lang="ts">
	import { cn } from '$lib';
	import * as Popover from '$lib/components/base/popover';
	import {
		ColorPicker,
		type OKhsv,
		type OKlab,
		type RGB
	} from '$lib/components/extra/color-picker/base';
	import { okhsv_to_rgb, oklab_to_rgb, type OKlch } from '../base/color';

	let {
		rgb = $bindable(),
		oklab = $bindable(),
		okhsv = $bindable(),
		sideOffset = 10,
		side = 'bottom',
		class: className,
		onchange
	}: {
		rgb?: RGB;
		oklab?: OKlab;
		okhsv?: OKhsv;
		class?: string;
		sideOffset?: number;
		side?: 'top' | 'right' | 'bottom' | 'left';
		onchange?: (color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void;
	} = $props();

	let internalColor = $derived(convertToInternal(rgb, oklab, okhsv));

	function convertToInternal(
		rgb: RGB | undefined,
		oklab: OKlab | undefined,
		okhsv: OKhsv | undefined
	): RGB {
		if (okhsv) {
			return okhsv_to_rgb(okhsv);
		}

		if (oklab) {
			return oklab_to_rgb(oklab);
		}

		if (rgb) {
			return rgb;
		}

		throw 'rgb, oklab, or okhsv required';
	}
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2'
		)}
	>
		<div
			class="border-base-300 dark:border-base-700 focus-visible:outline-accent-500 z-10 size-8 rounded-full border"
			style={`background-color: rgb(${internalColor.r * 255}, ${internalColor.g * 255}, ${internalColor.b * 255});`}
		></div>
	</Popover.Trigger>
	<Popover.Content side={side} sideOffset={sideOffset}>
		<ColorPicker bind:rgb bind:oklab bind:okhsv class={className} onchange={onchange} />
	</Popover.Content>
</Popover.Root>
