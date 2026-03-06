import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Timer',
		description: 'A countdown timer display with animated digits. Bind to the timer prop to control it programmatically (start, pause, resume, reset).',
		props: {
			timer: {
				type: 'TimerState',
				description: 'The timer state object. Constructor takes duration in ms (default 10 minutes). Provides methods: start(), pause(), resume(), reset(), and properties: isRunning, isPaused, remaining.',
				bindable: true
			},
			showHours: {
				type: 'boolean',
				description: 'Whether to display the hours digits.',
				default: 'false'
			},
			showMinutes: {
				type: 'boolean',
				description: 'Whether to display the minutes digits.',
				default: 'true'
			},
			showSeconds: {
				type: 'boolean',
				description: 'Whether to display the seconds digits.',
				default: 'true'
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
