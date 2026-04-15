import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'AtmosphereAnimation',
		description:
			'Prebuilt animated Atmosphere hero (Lottie). lottie-web and the animation JSON are dynamically imported, so nothing ships until the component mounts.',
		props: {
			loop: {
				type: 'boolean',
				description: 'Whether to loop the animation.',
				default: 'true'
			},
			autoplay: {
				type: 'boolean',
				description: 'Whether to start playing on mount.',
				default: 'true'
			}
		}
	}
] satisfies APISchema[];
