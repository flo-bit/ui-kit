import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'ThemeToggle',
		description: 'A button that toggles between light, dark, and system theme modes. Uses mode-watcher under the hood.',
		props: {
			defaultMode: {
				type: { type: 'enum', definition: "'light' | 'dark' | 'system'" },
				description: 'The initial theme mode.',
				default: "'system'"
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
