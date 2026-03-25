import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ToggleGroup',
		description: 'A group of toggle buttons where one or multiple can be pressed. Built on top of the bits-ui ToggleGroup primitive.',
		props: {
			type: {
				type: { type: 'enum', definition: "'single' | 'multiple'" },
				description: "Whether a single or multiple items can be pressed at a time.",
				required: true
			},
			value: {
				type: { type: 'union', definition: 'string | string[]' },
				description: 'The currently pressed value(s). A string when type is "single", an array when "multiple".',
				bindable: true
			},
			onValueChange: {
				type: { type: 'function', definition: '(value: string | string[]) => void' },
				description: 'A callback invoked when the pressed value changes.'
			},
			variant: {
				type: { type: 'enum', definition: "'default'" },
				description: 'The visual variant of the toggle group items.',
				default: "'default'"
			},
			size: {
				type: { type: 'enum', definition: "'xs' | 'default' | 'sm' | 'lg'" },
				description: 'The size of the toggle group items.',
				default: "'default'"
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the entire toggle group is disabled.',
				default: 'false'
			},
			loop: {
				type: 'boolean',
				description: 'Whether keyboard navigation loops from last item to first and vice versa.',
				default: 'true'
			},
			orientation: {
				type: { type: 'enum', definition: "'horizontal' | 'vertical'" },
				description: 'The orientation of the toggle group for keyboard navigation.',
				default: "'horizontal'"
			},
			rovingFocus: {
				type: 'boolean',
				description: 'Whether the toggle group uses roving focus management.',
				default: 'true'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	},
	{
		title: 'ToggleGroupItem',
		description: 'A single item within a toggle group.',
		props: {
			value: {
				type: 'string',
				description: 'The value of this toggle item.',
				required: true,
				bindable: true
			},
			variant: {
				type: { type: 'enum', definition: "'default'" },
				description: 'Override the visual variant for this specific item. Falls back to the parent ToggleGroup variant.'
			},
			size: {
				type: { type: 'enum', definition: "'xs' | 'default' | 'sm' | 'lg'" },
				description: 'Override the size for this specific item. Falls back to the parent ToggleGroup size.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether this item is disabled.',
				default: 'false'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
