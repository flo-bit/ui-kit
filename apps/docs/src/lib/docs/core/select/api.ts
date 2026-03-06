import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Select',
		description: 'A dropdown select menu. Built on top of the bits-ui Select primitive.',
		props: {
			value: {
				type: { type: 'union', definition: 'string | string[]' },
				description: 'The currently selected value.',
				bindable: true
			},
			items: {
				type: { type: 'array', definition: '{ value: string; label: string; disabled?: boolean }[]' },
				description: 'The list of items to display in the select dropdown.',
				required: true
			},
			placeholder: {
				type: 'string',
				description: 'Placeholder text shown when no value is selected.'
			},
			type: {
				type: { type: 'enum', definition: "'single' | 'multiple'" },
				description: 'Whether the select allows single or multiple selections.',
				default: "'single'"
			},
			open: {
				type: 'boolean',
				description: 'Whether the select dropdown is open.',
				default: 'false',
				bindable: true
			},
			onValueChange: {
				type: { type: 'function', definition: '(value: string) => void' },
				description: 'A callback invoked when the selected value changes.'
			},
			onOpenChange: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked when the dropdown open state changes.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the select is disabled.',
				default: 'false'
			},
			name: {
				type: 'string',
				description: 'The name of the select used in form submission.'
			},
			required: {
				type: 'boolean',
				description: 'Whether the select is required.',
				default: 'false'
			},
			loop: {
				type: 'boolean',
				description: 'Whether keyboard navigation loops from last item to first and vice versa.',
				default: 'false'
			},
			allowDeselect: {
				type: 'boolean',
				description: 'Whether the user can deselect the selected item.',
				default: 'false'
			},
			contentProps: {
				type: 'Select.ContentProps',
				description: 'Additional props to pass to the underlying Select.Content component (positioning, collision, etc.).'
			}
		}
	}
] satisfies APISchema[];
