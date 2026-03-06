import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Toaster',
		description: 'A toast notification container. Place once in your layout and use the toast() function to show notifications. Built on svelte-sonner.',
		props: {
			colors: {
				type: { type: 'object', definition: "{ default?: Colors; success?: Colors; error?: Colors; info?: Colors }" },
				description: "Color mapping for toast types. Colors can be: 'blue' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'orange' | 'teal' | 'emerald' | 'lime' | 'cyan' | 'sky' | 'rose' | 'amber' | 'violet' | 'fuchsia' | 'base' | 'accent'.",
				default: "{ default: 'accent', success: 'green', error: 'red', info: 'blue' }"
			}
		}
	}
] satisfies APISchema[];
