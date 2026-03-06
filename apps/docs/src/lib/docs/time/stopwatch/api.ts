import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Stopwatch',
		description: 'A stopwatch display with animated digits. Bind to the stopwatch prop to control it programmatically (start, pause, resume, reset).',
		props: {
			stopwatch: {
				type: 'StopwatchState',
				description: 'The stopwatch state object. Provides methods: start(), pause(), resume(), reset(), and properties: isRunning, isPaused, elapsed.',
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
