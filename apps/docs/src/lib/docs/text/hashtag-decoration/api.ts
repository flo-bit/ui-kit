import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'HashtagDecoration',
		description:
			'A tiptap Extension that decorates #hashtags with a CSS class. Add via extraExtensions and style the .hashtag class.',
		props: {}
	}
] satisfies APISchema[];
