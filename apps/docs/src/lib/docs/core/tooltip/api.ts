import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Tooltip',
		description: 'A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it. Built on top of the bits-ui Tooltip primitive.',
		props: {
			open: {
				type: 'boolean',
				description: 'Whether the tooltip is open.',
				default: 'false',
				bindable: true
			},
			text: {
				type: 'string',
				description: 'Simple text content for the tooltip. Use this for plain text tooltips.'
			},
			content: {
				type: 'Snippet',
				description: 'A snippet for custom tooltip content. Use this instead of text for rich content.'
			},
			child: {
				type: 'Snippet',
				description: 'A snippet for custom trigger rendering. The trigger element that the tooltip is anchored to.'
			},
			withContext: {
				type: 'boolean',
				description: 'Whether to use a context menu-style tooltip (right-click triggered).',
				default: 'false'
			},
			triggerProps: {
				type: 'Tooltip.TriggerProps',
				description: 'Additional props to pass to the underlying Tooltip.Trigger component.'
			},
			contentProps: {
				type: 'Tooltip.ContentProps',
				description: 'Additional props to pass to the underlying Tooltip.Content component (positioning, collision, etc.).'
			},
			onOpenChange: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked when the open state changes.'
			},
			onOpenChangeComplete: {
				type: { type: 'function', definition: '(open: boolean) => void' },
				description: 'A callback invoked after the open/close transition completes.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the tooltip is disabled.',
				default: 'false'
			},
			delayDuration: {
				type: 'number',
				description: 'The delay in milliseconds before the tooltip opens on hover.',
				default: '700'
			},
			disableHoverableContent: {
				type: 'boolean',
				description: 'Whether hovering over the tooltip content keeps it open.',
				default: 'false'
			},
			disableCloseOnTriggerClick: {
				type: 'boolean',
				description: 'Whether clicking the trigger closes the tooltip.',
				default: 'false'
			},
			ignoreNonKeyboardFocus: {
				type: 'boolean',
				description: 'Whether to ignore non-keyboard focus events (e.g. mouse focus).',
				default: 'false'
			}
		}
	}
] satisfies APISchema[];
