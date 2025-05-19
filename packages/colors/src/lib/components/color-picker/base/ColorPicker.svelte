<script lang="ts">
	import { eps, picker_size, slider_width, border_size, gap_size } from './constants';
	import { render_main_image, render_slider_image } from './render';
	import type { RGB, OKlab, OKhsv, OKlch } from './color';
	import {
		okhsv_to_oklab,
		okhsv_to_rgb,
		okhsv_to_oklch,
		rgb_to_hex,
		oklab_to_okhsv,
		rgb_to_okhsv,
		oklab_to_rgb
	} from './color';

	import { cn } from '@fuxui/base';

	let {
		rgb = $bindable(),
		oklab = $bindable(),
		okhsv = $bindable(),
		class: className,
		onchange,
		quickSelects = $bindable([])
	}: {
		rgb?: RGB;
		oklab?: OKlab;
		okhsv?: OKhsv;
		class?: string;
		onchange?: (color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void;
		quickSelects?: {
			label: string;
			rgb?: RGB;
			oklab?: OKlab;
			okhsv?: OKhsv;
		}[];
	} = $props();

	const width = picker_size + slider_width + gap_size + border_size * 2;
	const height = picker_size + border_size * 2;

	let color = $derived(convertToInternal(rgb, oklab, okhsv));
	let uihsv = $derived(scale_to_ui(color));

	function scale_to_ui(okhsv: OKhsv): OKhsv {
		return {
			h: clamp_ui(okhsv.h / 360),
			s: clamp_ui(okhsv.s),
			v: clamp_ui(1 - okhsv.v)
		};
	}

	function clamp(x: number) {
		return x < eps ? eps : x > 1 - eps ? 1 - eps : x;
	}

	function clamp_ui(value: number) {
		return value < 0 ? 0 : value > 1 ? picker_size : value * picker_size;
	}

	function convertToInternal(
		rgb: RGB | undefined,
		oklab: OKlab | undefined,
		okhsv: OKhsv | undefined
	) {
		if (okhsv) {
			return okhsv;
		}

		if (oklab) {
			return oklab_to_okhsv(oklab);
		}

		if (rgb) {
			return rgb_to_okhsv(rgb);
		}

		throw 'rgb, oklab, or okhsv required';
	}

	async function update_input() {
		let new_rgb = okhsv_to_rgb(color);
		let new_oklab = okhsv_to_oklab(color);
		let new_oklch = okhsv_to_oklch(color);
		let new_hex = rgb_to_hex(new_rgb);
		let new_okhsv = color;

		if (okhsv) {
			okhsv = color;
		}

		if (oklab) {
			oklab = new_oklab;
		}

		if (rgb) {
			rgb = new_rgb;
		}

		onchange?.({
			rgb: new_rgb,
			oklab: new_oklab,
			okhsv: new_okhsv,
			oklch: new_oklch,
			hex: new_hex
		});
	}

	function update_sv(x: number, y: number) {
		let new_s = clamp(x / picker_size);
		let new_v = clamp(1 - y / picker_size);

		color.s = new_s;
		color.v = new_v;

		update_input();
	}

	function update_h(x: number, y: number) {
		let h = clamp(y / picker_size);
		color.h = h * 360;
		color.s = Math.max(color.s, 0.00001);
		color.v = Math.max(color.v, 0.00001);

		update_input();
	}

	function pointer(node: HTMLCanvasElement, fn: (x: number, y: number) => void) {
		let active = false;

		function update(event: PointerEvent) {
			const x = event.offsetX;
			const y = event.offsetY;
			fn(x, y);
		}

		function onpointerdown(event: PointerEvent) {
			event.stopPropagation();
			node.setPointerCapture(event.pointerId);
			update(event);
			active = true;
		}

		function onpointermove(event: PointerEvent) {
			event.stopPropagation();
			if (active) {
				update(event);
			}
		}

		function onpointerend(event: PointerEvent) {
			event.stopPropagation();
			node.releasePointerCapture(event.pointerId);
			active = false;
		}

		node.addEventListener('pointerdown', onpointerdown, { passive: true });
		node.addEventListener('pointermove', onpointermove, { passive: true });
		node.addEventListener('pointerup', onpointerend, { passive: true });
		node.addEventListener('pointercancel', onpointerend, { passive: true });

		return {
			destroy() {
				node.removeEventListener('pointerdown', onpointerdown);
				node.removeEventListener('pointermove', onpointermove);
				node.removeEventListener('pointerup', onpointerend);
				node.removeEventListener('pointercancel', onpointerend);
			}
		};
	}

	function onKeydown(event: KeyboardEvent) {
		const keyHandled = () => {
			event.preventDefault();
			event.stopPropagation();
		};

		const step = event.shiftKey ? 10 : 1;

		switch (event.key) {
			case 'ArrowUp':
				if (event.altKey) {
					update_h(0, Math.round(uihsv.h! - step));
				} else {
					update_sv(uihsv.s, Math.round(uihsv.v - step));
				}
				keyHandled();
				break;

			case 'ArrowDown':
				if (event.altKey) {
					update_h(0, Math.round(uihsv.h! + step));
				} else {
					update_sv(uihsv.s, Math.round(uihsv.v + step));
				}
				keyHandled();
				break;

			case 'ArrowLeft':
				update_sv(Math.round(uihsv.s - step), uihsv.v);
				keyHandled();
				break;

			case 'ArrowRight':
				update_sv(Math.round(uihsv.s + step), uihsv.v);
				keyHandled();
				break;
		}
	}

	function convertToRgb(
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

	function getRgbString(rgb: RGB) {
		return `rgb(${rgb.r * 255}, ${rgb.g * 255}, ${rgb.b * 255})`;
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={cn(
		'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 relative rounded-xl border-none focus-visible:outline-2 focus-visible:outline-offset-2',
		className
	)}
	tabindex="0"
	style:width="{width}px"
	style:height="{height}px"
	onkeydown={onKeydown}
>
	<canvas
		id="okhsv_sv_canvas"
		width={picker_size}
		height={picker_size}
		style:top="{border_size}px"
		style:left="{border_size}px"
		class="absolute touch-none rounded-xl"
		use:pointer={update_sv}
		use:render_main_image={color.h}
	></canvas>
	<canvas
		width={slider_width}
		height={picker_size}
		style:top="{border_size}px"
		style:left="{picker_size + gap_size}px"
		class="absolute touch-none rounded-xl"
		use:pointer={update_h}
		use:render_slider_image
	></canvas>

	<svg {width} {height} class="pointer-events-none absolute touch-none">
		<g transform="translate({border_size},{border_size})">
			<g transform="translate({uihsv.s},{uihsv.v})">
				<circle cx="0" cy="0" r="5" fill="none" stroke-width="1.75" class="stroke-base-50" />
				<circle cx="0" cy="0" r="6" fill="none" stroke-width="1.25" class="stroke-base-950" />
			</g>
		</g>
		<g transform="translate({picker_size + gap_size},{border_size})">
			<g transform="translate(0,{uihsv.h})">
				<polygon points="-7,-4 -1,0 -7,4" stroke-width="0.8" class="stroke-base-950 fill-base-50" />
				<polygon
					points="{slider_width + 7},-4 {slider_width + 1},0 {slider_width + 7},4"
					stroke-width="0.8"
					class="stroke-base-950 fill-base-50"
				/>
			</g>
		</g>
	</svg>
</div>

{#if quickSelects.length > 0}
	<div class="grid grid-cols-7 gap-2 px-2 pt-2 pb-3" 
	style:width="{width}px">
		{#each quickSelects as quickSelect}
			<button
				class={cn(
					'focus-visible:outline-base-900 dark:focus-visible:outline-base-100 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2',
					'group'
				)}
				onclick={() => {
					color = convertToInternal(quickSelect.rgb, quickSelect.oklab, quickSelect.okhsv);

					update_input();
				}}
			>
				<div
				class="border-base-300 dark:border-base-700 focus-visible:outline-accent-500 z-10 size-7 rounded-full border group-hover:scale-105 group-active:scale-95 transition-all duration-100"
					style="background-color: {getRgbString(
						convertToRgb(quickSelect.rgb, quickSelect.oklab, quickSelect.okhsv)
					)};"
				></div>
				<span class="sr-only">Select {quickSelect.label}</span>
			</button>
		{/each}
	</div>
{/if}
