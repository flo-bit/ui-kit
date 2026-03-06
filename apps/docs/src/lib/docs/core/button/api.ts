import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Button',
		description: 'A clickable button element. Renders as an anchor tag when href is provided.',
		props: {
			variant: {
				type: { type: 'enum', definition: "'primary' | 'secondary' | 'link' | 'ghost' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'" },
				description: 'The visual variant of the button.',
				default: "'primary'"
			},
			size: {
				type: { type: 'enum', definition: "'default' | 'sm' | 'lg' | 'icon' | 'iconSm' | 'iconLg'" },
				description: 'The size of the button.',
				default: "'default'"
			},
			href: {
				type: 'string',
				description: 'When provided, the button renders as an anchor element (<a>) instead of a <button>.'
			},
			type: {
				type: 'string',
				description: 'The type attribute for the button element.',
				default: "'button'"
			},
			haptics: {
				type: 'boolean',
				description: 'Whether to trigger haptic feedback on click (uses web-haptics).'
			},
			onclick: {
				type: { type: 'function', definition: '(event: MouseEvent) => void' },
				description: 'Click event handler.'
			},
			children: {
				type: 'Snippet',
				description: 'The content to display inside the button.',
				required: true
			},
			class: {
				type: 'string',
				description: 'Additional CSS classes to apply.'
			},
			ref: {
				type: 'HTMLElement',
				description: 'The underlying DOM element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
