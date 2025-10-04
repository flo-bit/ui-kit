<script lang="ts">
	import { cn, Popover } from '@foxui/core';

	import { ColorPicker, type OKhsv, type OKlab, type RGB } from '../base';

	import { okhsv_to_rgb, oklab_to_rgb, type OKlch } from '../base/color';

	let {
		rgb = $bindable(),
		oklab = $bindable(),
		okhsv = $bindable(),
		sideOffset = 10,
		side = 'bottom',
		class: className,
		onchange,
		quickSelects = $bindable([]),
		...restProps
	}: {
		rgb?: RGB;
		oklab?: OKlab;
		okhsv?: OKhsv;
		class?: string;
		sideOffset?: number;
		side?: 'top' | 'right' | 'bottom' | 'left';
		onchange?: (color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void;
		quickSelects?: {
			label: string;
			rgb?: RGB;
			oklab?: OKlab;
			okhsv?: OKhsv;
		}[];
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

<Popover {side} {sideOffset} class="p-1 pl-2 pr-0">
	{#snippet child({ props })}
		<button
			{...props}
			class={cn(
				'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2',
				'group'
			)}
		>
			<div
				class="border-base-300 dark:border-base-700 focus-visible:outline-accent-500 z-10 size-8 rounded-full border group-hover:scale-105 group-active:scale-95 transition-all duration-100"
				style={`background-color: rgb(${internalColor.r * 255}, ${internalColor.g * 255}, ${internalColor.b * 255});`}
			></div>
			<span class="sr-only">Pick a color</span>
		</button>
	{/snippet}

	<ColorPicker bind:rgb bind:oklab bind:okhsv class={className} {onchange} {quickSelects} {...restProps} />
</Popover>
