import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'RadioGroup',
		description:
			'A set of radio buttons where exactly one can be selected. Pass an `options` array for the common case, or use `RadioGroupItem` as children for custom layouts.',
		props: {
			value: {
				type: 'string',
				description: 'The currently selected value.',
				default: "''",
				bindable: true
			},
			options: {
				type: 'RadioGroupOption[]',
				description:
					'Array of options rendered as radio items with labels. Each option is `{ value, label?, description?, disabled? }`. Omit to compose children manually.'
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'Color variant applied to every item.',
				default: "'primary'"
			},
			sizeVariant: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'Size applied to every item.',
				default: "'default'"
			},
			orientation: {
				type: { type: 'enum', definition: "'vertical' | 'horizontal'" },
				description: 'Layout direction when rendering the options array.',
				default: "'vertical'"
			},
			disabled: {
				type: 'boolean',
				description: 'Disable the entire group.'
			},
			onValueChange: {
				type: { type: 'function', definition: '(value: string) => void' },
				description: 'Callback when the selected value changes.'
			},
			children: {
				type: 'Snippet',
				description: 'Custom content (e.g. `RadioGroupItem`s). Ignored if `options` is provided.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes on the group container.'
			}
		}
	},
	{
		title: 'RadioGroupItem',
		description: 'A single radio item. Use when composing a custom layout.',
		props: {
			value: {
				type: 'string',
				description: 'The value represented by this item.',
				required: true
			},
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary'" },
				description: 'Color variant.',
				default: "'primary'"
			},
			sizeVariant: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg'" },
				description: 'Size of the radio circle.',
				default: "'default'"
			},
			disabled: {
				type: 'boolean',
				description: 'Disable this item.'
			},
			id: {
				type: 'string',
				description: 'HTML id used to associate an external `<Label for={id}>`.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes.'
			}
		}
	}
] satisfies APISchema[];
