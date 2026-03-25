import type { Snippet } from 'svelte';
import type { Embed } from '../embed';
import type { ActionButtonsProps } from '../action-buttons';

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

	replyCount?: number;
	repostCount?: number;
	likeCount?: number;

	createdAt: string;

	embeds?: Embed[];

	htmlContent?: string;

	replies?: PostData[];

	labels?: string[];
};

export type PostHeaderProps = {
	author: PostData['author'];
	createdAt: string;
	timestamp?: { href?: string; onclick?: () => void };
	onclickhandle?: (handle: string, href?: string) => void;
	showAvatar?: boolean;
	compact?: boolean;
	logo?: Snippet;
	target?: string;
	class?: string;
};

export type PostProps = {
	data: PostData;
	class?: string;
	children?: Snippet;

	embeds?: Embed[];
	showSensitive?: boolean;
	extraEmbeds?: Snippet;

	actions?: ActionButtonsProps;

	onclickhandle?: (handle: string, href?: string) => void;

	timestamp?: { href?: string; onclick?: () => void };

	logo?: Snippet;

	showAvatar?: boolean;
	compact?: boolean;
	target?: string;
};
