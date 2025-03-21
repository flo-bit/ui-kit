<script lang="ts">
	import { cn } from '$lib';
	import * as Popover from '$lib/components/base/popover';
	import {
		ColorPicker,
		type OKhsv,
		type OKlab,
		type RGB
	} from '$lib/components/extra/color-picker/base';
	import { type OKlch } from '../color-picker/base/color';

	let {
		class: className,
		onchange
	}: {
		rgb?: RGB;
		oklab?: OKlab;
		okhsv?: OKhsv;
		class?: string;
		onchange?: (color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void;
	} = $props();

	type Color = { rgb: RGB; position: number };

	let colors: Color[] = $state([
		{ rgb: { r: 0, g: 0, b: 0 }, position: 0 },
		{ rgb: { r: 1, g: 0, b: 0 }, position: 0.25 },
		{ rgb: { r: 0, g: 1, b: 0 }, position: 0.5 },
		{ rgb: { r: 0, g: 0, b: 1 }, position: 0.75 },
		{ rgb: { r: 1, g: 1, b: 0 }, position: 1 }
	]);

	$effect(() => {
		colors.sort((a, b) => a.position - b.position);
	});

	const gradientString = $derived(
		`linear-gradient(to right, ${colors
			.map(({ rgb, position }) => `rgb(${rgb.r * 255}, ${rgb.g * 255}, ${rgb.b * 255}) ${position * 100}%`)
			.join(', ')})`
	);

	$inspect(gradientString);

	let activeColor: Color | undefined = $state(undefined);
	let activePosition: number | undefined = $state(undefined);
	let mouseDownPosition: number | undefined = $state(undefined);

	let gradientRef = $state<HTMLDivElement | undefined>(undefined);
</script>

<div
	class="relative h-8 w-full rounded-2xl border border-base-300 dark:border-base-700 touch-none"
	style={'background: ' + gradientString}
	bind:this={gradientRef}

	onpointermove={(evt) => {
		if (activeColor && activePosition !== undefined && mouseDownPosition !== undefined) {
			const delta = evt.clientX - mouseDownPosition;

			// get the gradient bounding box
			const gradientBoundingBox = gradientRef?.getBoundingClientRect();
			let movement = delta / (gradientBoundingBox?.width ?? 1);
			
			const newPosition = activePosition + movement;
			activeColor.position = newPosition;
		}
	}}
>
	{#each colors as color, i}
		<Popover.Root>
			<Popover.Trigger
				class={cn(
					'absolute top-4 left-0',
					'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2'
				)}
				style={`left: calc(${color.position * 100}% - 16px)`}
				onpointerdown={(evt) => {
					activeColor = color;
					mouseDownPosition = evt.clientX;
					activePosition = color.position;
				}}
				onpointerup={() => {
					activeColor = undefined;
					activePosition = undefined;
					mouseDownPosition = undefined;
				}}
			>
				<div
					class="border-base-300 dark:border-base-950 focus-visible:outline-accent-500 z-10 size-8 rounded-full border-2"
					style={`background-color: rgb(${color.rgb.r * 255}, ${color.rgb.g * 255}, ${color.rgb.b * 255});`}
				></div>

				<div class="absolute inset-0 size-8 rounded-full border border-base-700 dark:border-base-300"></div>
			</Popover.Trigger>
			<Popover.Content side="bottom" sideOffset={10}>
				<ColorPicker bind:rgb={colors[i].rgb} class={className} />
			</Popover.Content>
		</Popover.Root>
	{/each}
</div>
