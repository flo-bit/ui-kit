import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'EmojiPicker',
		description: 'A searchable emoji picker grid with category tabs.',
		props: {
			onpicked: {
				type: { type: 'function', definition: '(emoji: NativeEmoji) => void' },
				description: 'Callback invoked when an emoji is selected.'
			},
			height: {
				type: 'number',
				description: 'The height of the picker in pixels.',
				default: '300'
			},
			width: {
				type: 'number',
				description: 'The width of the picker in pixels.',
				default: '344'
			},
			columns: {
				type: 'number',
				description: 'The number of emoji columns.',
				default: '8'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	},
	{
		title: 'PopoverEmojiPicker',
		description: 'An emoji picker wrapped in a popover.',
		props: {
			onpicked: {
				type: { type: 'function', definition: '(emoji: NativeEmoji) => void' },
				description: 'Callback invoked when an emoji is selected.'
			},
			open: {
				type: 'boolean',
				description: 'Whether the popover is open.',
				default: 'false',
				bindable: true
			},
			triggerRef: {
				type: 'HTMLElement',
				description: 'Reference to the trigger element.',
				bindable: true
			},
			children: {
				type: 'Snippet',
				description: 'Custom trigger content.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			}
		}
	}
] satisfies APISchema[];
