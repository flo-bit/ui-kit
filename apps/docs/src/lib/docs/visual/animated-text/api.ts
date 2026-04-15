import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'AnimatedText',
		description:
			'Animated handwriting text. Any font draws itself stroke by stroke, powered by tegaki.',
		props: {
			text: {
				type: 'string',
				description: 'The text to animate.'
			},
			font: {
				type: { type: 'enum', definition: "'caveat' | 'italianno' | 'tangerine' | 'parisienne'" },
				description: 'Built-in handwriting font to use. You can also pass a custom tegaki font bundle.',
				default: "'caveat'"
			},
			speed: {
				type: 'number',
				description: 'Animation speed multiplier (uncontrolled mode).',
				default: '1'
			},
			loop: {
				type: 'boolean',
				description: 'Whether to loop the animation (uncontrolled mode).',
				default: 'true'
			},
			mode: {
				type: { type: 'enum', definition: "'uncontrolled' | 'controlled'" },
				description:
					"Use 'controlled' to drive the animation progress yourself via the progress prop.",
				default: "'uncontrolled'"
			},
			progress: {
				type: 'number',
				description: 'Progress from 0 to 1. Only used when mode is "controlled".',
				default: '0'
			}
		}
	}
] satisfies APISchema[];
