import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ColorPicker',
		description: 'A full color picker with a saturation/value area, hue slider, and optional quick-select swatches. Supports RGB, OKLab, and OKHsv color spaces.',
		props: {
			rgb: {
				type: { type: 'object', definition: '{ r: number; g: number; b: number }' },
				description: 'The current color in RGB format (0-255).',
				bindable: true
			},
			oklab: {
				type: { type: 'object', definition: '{ l: number; a: number; b: number }' },
				description: 'The current color in OKLab format.',
				bindable: true
			},
			okhsv: {
				type: { type: 'object', definition: '{ h: number; s: number; v: number }' },
				description: 'The current color in OKHsv format.',
				bindable: true
			},
			onchange: {
				type: { type: 'function', definition: '(color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void' },
				description: 'Callback invoked when the color changes. Provides the color in all supported formats.'
			},
			quickSelects: {
				type: { type: 'array', definition: '{ label: string; rgb?: RGB; oklab?: OKlab; okhsv?: OKhsv }[]' },
				description: 'Quick-select color swatches displayed below the picker.',
				default: '[]',
				bindable: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	},
	{
		title: 'PopoverColorPicker',
		description: 'A color picker wrapped in a popover, triggered by a color swatch button.',
		props: {
			rgb: {
				type: { type: 'object', definition: '{ r: number; g: number; b: number }' },
				description: 'The current color in RGB format (0-255).',
				bindable: true
			},
			oklab: {
				type: { type: 'object', definition: '{ l: number; a: number; b: number }' },
				description: 'The current color in OKLab format.',
				bindable: true
			},
			okhsv: {
				type: { type: 'object', definition: '{ h: number; s: number; v: number }' },
				description: 'The current color in OKHsv format.',
				bindable: true
			},
			onchange: {
				type: { type: 'function', definition: '(color: { hex: string; rgb: RGB; oklab: OKlab; okhsv: OKhsv; oklch: OKlch }) => void' },
				description: 'Callback invoked when the color changes.'
			},
			quickSelects: {
				type: { type: 'array', definition: '{ label: string; rgb?: RGB; oklab?: OKlab; okhsv?: OKhsv }[]' },
				description: 'Quick-select color swatches.',
				default: '[]',
				bindable: true
			},
			side: {
				type: { type: 'enum', definition: "'top' | 'right' | 'bottom' | 'left'" },
				description: 'The preferred side of the trigger to render the popover.',
				default: "'bottom'"
			},
			sideOffset: {
				type: 'number',
				description: 'The distance in pixels from the trigger.',
				default: '10'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
