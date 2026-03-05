export type {
	PostImageData,
	PostEmbedImage,
	PostEmbedExternal,
	PostEmbedVideo,
	QuotedPostData,
	PostEmbedRecord,
	PostEmbedRecordWithMedia,
	UnknownEmbed,
	PostEmbed,
	PostData,
	PostProps
} from './types';

import type { PostData } from './types';

export const nsfwLabels = ['porn', 'sexual', 'graphic-media', 'nudity'];

export function hasNSFWLabel(post: PostData): boolean {
	if (!post.labels) return false;

	return post.labels.some((label) => nsfwLabels.includes(label));
}

export { default as Post } from './Post.svelte';
