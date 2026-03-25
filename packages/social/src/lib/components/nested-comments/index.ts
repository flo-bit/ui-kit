import type { PostData } from '../post';

export { default as NestedComments } from './NestedComments.svelte';

export type CommentSortFn = (a: PostData, b: PostData) => number;

export const commentSort = {
	oldestFirst: ((a, b) =>
		new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) satisfies CommentSortFn,
	newestFirst: ((a, b) =>
		new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) satisfies CommentSortFn,
	mostLiked: ((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0)) satisfies CommentSortFn,
	leastLiked: ((a, b) => (a.likeCount ?? 0) - (b.likeCount ?? 0)) satisfies CommentSortFn,
	mostReplies: ((a, b) => (b.replyCount ?? 0) - (a.replyCount ?? 0)) satisfies CommentSortFn,
	leastReplies: ((a, b) => (a.replyCount ?? 0) - (b.replyCount ?? 0)) satisfies CommentSortFn
};
