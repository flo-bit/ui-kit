import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Modal',
		description: 'A dialog overlay that requires user interaction. Built on top of the bits-ui Dialog primitive.',
		props: {
			open: {
				type: 'boolean',
				description: 'Whether the modal is open.',
				default: 'false',
				bindable: true
			},
			children: {
				type: 'Snippet',
				description: 'The content to display inside the modal.',
				required: true
			},
			closeButton: {
				type: 'boolean',
				description: 'Whether to show the close button in the top-right corner.',
				default: 'true'
			},
			interactOutsideBehavior: {
				type: { type: 'enum', definition: "'close' | 'ignore'" },
				description: 'How the modal responds to clicks outside its content.',
				default: "'close'"
			},
			onOpenAutoFocus: {
				type: { type: 'function', definition: '(event: Event) => void' },
				description: 'Callback when focus is moved into the modal on open. Call event.preventDefault() to prevent default focus behavior.'
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
				description: 'Additional CSS classes to apply to the modal content.'
			}
		}
	}
] satisfies APISchema[];
