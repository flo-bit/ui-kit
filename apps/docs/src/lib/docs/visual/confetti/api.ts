import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'launchConfetti',
		description: 'A function (not a component) that launches a confetti animation using theme colors. Import and call it directly.',
		props: {
			color: {
				type: 'string',
				description: "The theme color name to use for confetti particles (e.g. 'accent', 'red', 'blue').",
				default: "'accent'"
			},
			brightnesses: {
				type: { type: 'array', definition: '(50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950)[]' },
				description: 'The brightness levels of the color to use for confetti particles.',
				default: '[300, 400, 500, 800]'
			}
		}
	}
] satisfies APISchema[];
