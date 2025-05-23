<script lang="ts">
	import { cn, Button, Popover } from '@fuxui/base';

	import { ColorPicker, type RGB } from '../color-picker/base';
	import { DragGesture } from '@use-gesture/vanilla';

	type ColorStop = { rgb: RGB; position: number };

	let initialColors: ColorStop[] = $state([
		{ rgb: { r: 0, g: 0, b: 1 }, position: 0 },
		{ rgb: { r: 1, g: 0, b: 0 }, position: 1 }
	]);

	let {
		colors = $bindable(initialColors),
		class: className,
		defaultNewColor = { r: 0, g: 0, b: 0 },
		size = 'default',
		onchange
	}: {
		rgb?: RGB;

		colors?: ColorStop[];

		class?: string;

		defaultNewColor?: RGB;

		size?: 'default' | 'sm';

		onchange?: (colors: ColorStop[]) => void;
	} = $props();

	const gradientString = $derived(
		`linear-gradient(to right, ${colors
			.toSorted((a, b) => a.position - b.position)
			.map(
				({ rgb, position }) =>
					`rgb(${rgb.r * 255}, ${rgb.g * 255}, ${rgb.b * 255}) ${position * 100}%`
			)
			.join(', ')})`
	);

	let colorsRef = $state<(HTMLButtonElement | null)[]>(new Array(colors.length).fill(null));
	let gradientRef = $state<HTMLDivElement | undefined>(undefined);
	let isDragging = $state(new Array(colors.length).fill(false));

	$effect(() => {
		let gestures: DragGesture[] = [];

		colorsRef.forEach((ref, i) => {
			if (!ref) return;

			gestures.push(
				new DragGesture(
					ref,
					(state) => {
						const { delta } = state;

						const newPosition = delta[0] / (gradientRef?.clientWidth ?? 1);

						colors[i].position += newPosition;
						colors[i].position = Math.max(0, Math.min(1, colors[i].position));

						if (Math.abs(state.offset[0]) > 10) {
							isDragging[i] = state.active;
						} else {
							isDragging[i] = state.active;
						}

						if (state.tap) {
							allOpen[i] = !allOpen[i];
						} else {
							onchange?.(colors);
						}
					},
					{
						preventDefault: true,
						eventOptions: {
							passive: false
						}
					}
				)
			);
		});

		return () => {
			gestures.forEach((gesture) => gesture.destroy());
		};
	});

	let allOpen = $state(new Array(colors.length).fill(false));

	function getOpen(i: number) {
		if (isDragging[i]) {
			return false;
		}
		return allOpen[i];
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class={cn(
		'border-base-400 dark:border-base-600 relative w-full cursor-pointer touch-none rounded-2xl border',
		size === 'sm' ? 'h-4' : 'h-8',
		className
	)}
	style={'background: ' + gradientString}
	bind:this={gradientRef}
	onclick={(e) => {
		// get target
		const target = e.target as HTMLDivElement;
		// if target is not the gradient itself return
		if (target !== gradientRef) {
			return;
		}
		let rect = gradientRef?.getBoundingClientRect();
		// get the position of the click
		const position = (e.clientX - rect.left) / (gradientRef?.clientWidth ?? 1);
		// add a new color
		colors.push({
			rgb: { r: defaultNewColor.r, g: defaultNewColor.g, b: defaultNewColor.b },
			position: position
		});
		colorsRef.push(null);
		allOpen.push(true);
		onchange?.(colors);
	}}
	onkeydown={(e) => {
		if (e.key === '+') {
			colors.push({
				rgb: { r: defaultNewColor.r, g: defaultNewColor.g, b: defaultNewColor.b },
				position: 0.5
			});
			colorsRef.push(null);
			allOpen.push(true);
		}
	}}
>
	{#each colors as color, i}
		<Popover
			bind:open={() => getOpen(i), (open) => {}}
			side="bottom"
			sideOffset={10}
			onInteractOutside={() => {
				allOpen[i] = false;
			}}
			onEscapeKeydown={() => {
				allOpen[i] = false;
			}}
			onkeydown={(e) => {
				if (e.key === 'Backspace' && colors.length > 2) {
					colors.splice(i, 1);
					onchange?.(colors);
				}
			}}
			class="p-1 pl-2 pr-0"
		>
			{#snippet child({ props })}
				<button
					{...props}
					class={cn(
						'absolute left-0 touch-none',
						'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2',
						size === 'sm' ? '-top-1.5' : '-top-4'
					)}
					style={`left: calc(${color.position * 100}% - 16px)`}
					bind:this={colorsRef[i]}
					tabindex={Math.floor(color.position * 100 + 10)}
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							allOpen[i] = !allOpen[i];
						} else if (e.key === 'Backspace' && colors.length > 2) {
							colors.splice(i, 1);
							onchange?.(colors);
						}
					}}
				>
					<div
						class={cn(
							'ring-base-400 dark:ring-base-500 focus-visible:outline-accent-500 shadow-base-900/50 z-10 rounded-full shadow-lg ring',
							size === 'sm' ? 'size-6' : 'size-8'
						)}
						style={`background-color: rgb(${color.rgb.r * 255}, ${color.rgb.g * 255}, ${color.rgb.b * 255});`}
					></div>
					<span class="sr-only">Color Picker</span>
				</button>
			{/snippet}
			<div>
				<ColorPicker
					bind:rgb={colors[i].rgb}
					onchange={() => {
						onchange?.(colors);
					}}
				/>

				<div class="flex w-full justify-center">
					{#if colors.length > 2}
						<Button
							variant="link"
							class="mb-1 backdrop-blur-none"
							onclick={() => {
								colors.splice(i, 1);
								onchange?.(colors);
							}}
							size="icon"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-6"
							>
								<path
									fill-rule="evenodd"
									d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
									clip-rule="evenodd"
								/>
							</svg>
							Delete
						</Button>
					{/if}
				</div>
			</div>
		</Popover>
	{/each}
</div>
