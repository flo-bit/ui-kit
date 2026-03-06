import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Popover',
		description: 'A floating panel anchored to a trigger button. Built on top of the bits-ui Popover primitive.',
		props: {
			open: {
				type: 'boolean',
				description: 'Whether the popover is open.',
				default: 'false',
				bindable: true
			},
			onOpenChange: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked when the open state changes.'
			},
			children: {
				type: 'Snippet',
				description: 'The content to display inside the popover.',
				required: true
			},
			triggerText: {
				type: 'string',
				description: 'Text label for the trigger button.'
			},
			triggerVariant: {
				type: { type: 'enum', definition: "'primary' | 'secondary' | 'link' | 'ghost'" },
				description: 'The visual variant of the trigger button.',
				default: "'primary'"
			},
			triggerSize: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg' | 'icon' | 'iconSm' | 'iconLg'" },
				description: 'The size of the trigger button.',
				default: "'default'"
			},
			triggerClasses: {
				type: 'string',
				description: 'Additional CSS classes to apply to the trigger button.',
				default: "''"
			},
			triggerRef: {
				type: 'HTMLButtonElement',
				description: 'Reference to the trigger button element.',
				bindable: true
			},
			side: {
				type: { type: 'enum', definition: "'top' | 'bottom' | 'left' | 'right'" },
				description: 'The preferred side of the trigger to render the popover.',
				default: "'top'"
			},
			sideOffset: {
				type: 'number',
				description: 'The distance in pixels from the trigger.',
				default: '10'
			},
			child: {
				type: 'Snippet',
				description: 'A snippet for custom trigger rendering. Use this instead of triggerText for full control over the trigger.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the popover content.'
			}
		}
	}
] satisfies APISchema[];
