import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'Lottie',
		description:
			'Renders a Lottie animation. lottie-web is lazy-loaded on mount so it only ships when used.',
		props: {
			src: {
				type: 'string',
				description: 'URL to a Lottie animation JSON file.'
			},
			data: {
				type: 'unknown',
				description: 'Parsed animation JSON. Takes precedence over src.'
			},
			loop: {
				type: 'boolean',
				description: 'Whether to loop the animation.',
				default: 'true'
			},
			autoplay: {
				type: 'boolean',
				description: 'Whether to start playing on mount.',
				default: 'true'
			},
			renderer: {
				type: { type: 'enum', definition: "'svg' | 'canvas' | 'html'" },
				description: 'Lottie renderer to use.',
				default: "'svg'"
			},
			colorMap: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description:
					'Map of source → target colors. Recolors the animation JSON before rendering. Values can be hex, rgb(), or var(--token).'
			}
		}
	}
] satisfies APISchema[];
