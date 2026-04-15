import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'DotLottie',
		description:
			'Lottie player using the dotLottie WASM runtime. Supports the Slots API for runtime theming. Lazy-loads the runtime on mount.',
		props: {
			src: {
				type: 'string',
				description: 'URL to a .lottie or .json animation file.'
			},
			data: {
				type: 'string | ArrayBuffer | Record<string, unknown>',
				description: 'Animation data. Takes precedence over src.'
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
			slots: {
				type: { type: 'object', definition: 'Record<string, string>' },
				description:
					'Map of slot id → color. Animation must mark properties with `sid` values per the Lottie Slots spec. Values can be hex, rgb(), or var(--token).'
			}
		}
	}
] satisfies APISchema[];
