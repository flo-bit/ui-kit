import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ChatBubble',
		description: 'A chat message bubble with left/right alignment for conversations.',
		props: {
			side: {
				type: { type: 'enum', definition: "'left' | 'right'" },
				description: 'Which side the bubble appears on. Left for received messages, right for sent.',
				default: "'left'"
			},
			variant: {
				type: 'string',
				description: 'The visual variant. Defaults to "primary" for left and "secondary" for right.'
			},
			size: {
				type: { type: 'enum', definition: "'sm' | 'md' | 'lg'" },
				description: 'The size of the chat bubble.',
				default: "'md'"
			},
			children: {
				type: 'Snippet',
				description: 'The message content.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLSpanElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
