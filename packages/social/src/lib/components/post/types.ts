import type { Snippet } from 'svelte';

export type PostImageData = {
	alt: string;
	thumb: string;
	fullsize: string;
	aspectRatio?: {
		width: number;
		height: number;
	};
};

export type PostEmbedImage = {
	type: 'images';
	images: PostImageData[];
};

export type PostEmbedExternal = {
	type: 'external';

	external: {
		href: string;
		thumb: string;
		title: string;
		description: string;
	};
};

export type PostEmbedVideo = {
	type: 'video';

	video: {
		playlist: string;

		thumb: string;
		alt: string;

		aspectRatio?: {
			width: number;
			height: number;
		};
	};
};

export type QuotedPostData = {
	author: {
		displayName: string;
		handle: string;
		avatar?: string;
		href?: string;
	};
	href?: string;
	htmlContent?: string;
	createdAt?: string;
	embed?: PostEmbed;
};

export type PostEmbedRecord = {
	type: 'record';
	record: QuotedPostData;
};

export type PostEmbedRecordWithMedia = {
	type: 'recordWithMedia';
	record: QuotedPostData;
	media: PostEmbed;
};

export type UnknownEmbed = {
	type: 'unknown';
} & Record<string, unknown>;

export type PostEmbed =
	| PostEmbedImage
	| PostEmbedExternal
	| PostEmbedVideo
	| PostEmbedRecord
	| PostEmbedRecordWithMedia
	| UnknownEmbed;

export type PostData = {
	href?: string;
	id?: string;

	reposted?: { handle: string; href: string };
	replyTo?: { handle: string; href: string };

	author: {
		displayName: string;
		handle: string;
		avatar?: string;
		href?: string;
	};

	replyCount: number;
	repostCount: number;
	likeCount: number;

	createdAt: string;

	embed?: PostEmbed;

	htmlContent?: string;

	replies?: PostData[];

	labels?: string[];
};

export type PostProps = {
	data: PostData;
	class?: string;
	children?: Snippet;

	bookmarked?: boolean;
	liked?: boolean;

	showReply?: boolean;
	showRepost?: boolean;
	showLike?: boolean;
	showBookmark?: boolean;

	onReplyClick?: () => void;
	onRepostClick?: () => void;
	onLikeClick?: () => void;
	onBookmarkClick?: () => void;

	replyHref?: string;
	repostHref?: string;
	likeHref?: string;

	onclickimage?: (image: PostImageData) => void;
	onclickpost?: (data: PostData | QuotedPostData, href?: string) => void;
	onclickhandle?: (handle: string, href?: string) => void;

	timestampHref?: string;
	ontimestampclick?: () => void;

	customActions?: Snippet;

	logo?: Snippet;

	showAvatar?: boolean;
	compact?: boolean;

	showImages?: boolean;
	showExternal?: boolean;
	showVideo?: boolean;
	showQuotes?: boolean;
};
