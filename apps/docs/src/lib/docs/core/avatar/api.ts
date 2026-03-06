import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Avatar',
		description: 'An image element with a fallback for representing a user.',
		props: {
			src: {
				type: 'string',
				description: 'The image source URL.'
			},
			alt: {
				type: 'string',
				description: 'Alt text for the avatar image.'
			},
			fallback: {
				type: 'string',
				description: 'Fallback text to display when the image is not available (e.g. initials).'
			},
			useThemeColor: {
				type: 'boolean',
				description: 'Whether to apply theme color styling to the image.',
				default: 'false'
			},
			imageClass: {
				type: 'string',
				description: 'Additional CSS classes to apply to the image element.'
			},
			fallbackClass: {
				type: 'string',
				description: 'Additional CSS classes to apply to the fallback element.'
			},
			imageRef: {
				type: 'HTMLImageElement',
				description: 'Reference to the image DOM element.',
				bindable: true
			},
			fallbackRef: {
				type: 'HTMLElement',
				description: 'Reference to the fallback DOM element.',
				bindable: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the root element.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	},
	{
		title: 'AvatarGroup',
		description: 'A group of overlapping avatars displayed in a row.',
		props: {
			users: {
				type: { type: 'array', definition: '{ src?: string; alt?: string; fallback?: string }[]' },
				description: 'The list of users to display avatars for.',
				required: true
			},
			avatarClass: {
				type: 'string',
				description: 'Additional CSS classes to apply to each avatar.'
			},
			imageClass: {
				type: 'string',
				description: 'Additional CSS classes to apply to each avatar image.'
			},
			fallbackClass: {
				type: 'string',
				description: 'Additional CSS classes to apply to each avatar fallback.'
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply to the group container.'
			},
			ref: {
				type: 'HTMLDivElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
