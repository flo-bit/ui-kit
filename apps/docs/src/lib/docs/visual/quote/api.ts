import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Quote',
		description: 'A styled blockquote with optional author avatar and attribution.',
		props: {
			quote: {
				type: 'string',
				description: 'The quote text.'
			},
			author: {
				type: { type: 'object', definition: '{ src?: string; alt?: string; fallback?: string; role?: string; name?: string; avatarClass?: string; fallbackClass?: string; imageClass?: string }' },
				description: 'The author information including avatar and name.'
			},
			useThemeColor: {
				type: 'boolean',
				description: 'Whether to apply theme color styling to the author avatar.',
				default: 'false'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
