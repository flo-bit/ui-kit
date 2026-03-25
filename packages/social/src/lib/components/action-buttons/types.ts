import type { Snippet } from 'svelte';

export type ReplyButtonProps = {
	count?: number;
	onclick?: () => void;
	href?: string;
};

export type RepostButtonProps = {
	count?: number;
	active?: boolean;
	onclick?: () => void;
	href?: string;
};

export type LikeButtonProps = {
	count?: number;
	active?: boolean;
	onclick?: () => void;
	href?: string;
};

export type BookmarkButtonProps = {
	active?: boolean;
	onclick?: () => void;
};

export type ActionButtonsProps = {
	reply?: ReplyButtonProps;
	repost?: RepostButtonProps;
	like?: LikeButtonProps;
	bookmark?: BookmarkButtonProps;
	customActions?: Snippet;
	class?: string;
};
