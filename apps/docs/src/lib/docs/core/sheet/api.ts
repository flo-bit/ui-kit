import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Sheet',
		description:
			'A dialog that slides in from the edge of the screen. Built on top of the bits-ui Dialog primitive.',
		props: {
			open: {
				type: 'boolean',
				description: 'Whether the sheet is open.',
				default: 'false',
				bindable: true
			},
			side: {
				type: { type: 'enum', definition: "'top' | 'right' | 'bottom' | 'left'" },
				description: 'Which edge of the screen the sheet slides in from.',
				default: "'right'"
			},
			title: {
				type: 'string',
				description: 'Optional title rendered in the sheet header.'
			},
			description: {
				type: 'string',
				description: 'Optional description rendered in the sheet header.'
			},
			children: {
				type: 'Snippet',
				description: 'The main content of the sheet.',
				required: true
			},
			footer: {
				type: 'Snippet',
				description: 'Optional footer snippet, typically containing action buttons.'
			},
			closeButton: {
				type: 'boolean',
				description: 'Whether to show the close button in the top-right corner.',
				default: 'true'
			},
			interactOutsideBehavior: {
				type: { type: 'enum', definition: "'close' | 'ignore'" },
				description: 'How the sheet responds to clicks outside its content.',
				default: "'close'"
			},
			onOpenAutoFocus: {
				type: { type: 'function', definition: '(event: Event) => void' },
				description:
					'Callback when focus is moved into the sheet on open. Call event.preventDefault() to prevent default focus behavior.'
			},
			contentProps: {
				type: 'Dialog.ContentProps',
				description: 'Additional props to pass to the underlying Dialog.Content component.'
			},
			onOpenChange: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked when the open state changes.'
			},
			onOpenChangeComplete: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked after the open/close transition completes.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the sheet content.'
			}
		}
	}
] satisfies APISchema[];
