import { RichText } from '@atproto/api';

export type PostEmbedImage = {
	type: 'images';

	images: {
		alt: string;
		thumb: string;
		fullsize: string;
		aspectRatio?: {
			width: number;
			height: number;
		};
	}[];
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

export type UnknownEmbed = {
	type: 'unknown';
} & Record<string, unknown>;

function blueskyEmbedTypeToEmbedType(type: string) {
	switch (type) {
		case 'app.bsky.embed.external#view':
		case 'app.bsky.embed.external':
			return 'external';
		case 'app.bsky.embed.images#view':
		case 'app.bsky.embed.images':
			return 'images';
		case 'app.bsky.embed.video#view':
		case 'app.bsky.embed.video':
			return 'video';
		default:
			return 'unknown';
	}
}

export type PostData = {
	reposted?: { handle: string; href: string };

	author: {
		displayName: string;
		handle: string;
		avatar: string;
		href: string;
	};

	replyCount: number;
	repostCount: number;
	likeCount: number;

	createdAt: string;

	embed?: PostEmbedImage | PostEmbedExternal | PostEmbedVideo | UnknownEmbed;

	htmlContent?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blueskyPostToPostData(post: any): PostData {
	return {
		author: {
			displayName: post.author.displayName,
			handle: post.author.handle,
			avatar: post.author.avatar,
			href: '#'
		},
		replyCount: post.replyCount,
		repostCount: post.repostCount,
		likeCount: post.likeCount,
		createdAt: post.createdAt,

		embed: {
			type: blueskyEmbedTypeToEmbedType(post.embed?.$type),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			images: post.embed?.images?.map((image: any) => ({
				alt: image.alt,
				thumb: image.thumb,
				aspectRatio: image.aspectRatio,
				fullsize: image.fullsize
			})),
			external: post.embed?.external
				? {
						href: post.embed.external.uri,
						title: post.embed.external.title,
						description: post.embed.external.description,
						thumb: post.embed.external.thumb
					}
				: undefined,
			video: post.embed
				? {
						playlist: post.embed.playlist,
						thumb: post.embed.thumbnail,
						alt: post.embed.alt,
						aspectRatio: post.embed.aspectRatio
					}
				: undefined
		} as PostEmbedExternal | PostEmbedVideo | PostEmbedImage | UnknownEmbed,

		htmlContent: blueskyPostToHTML(post)
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function blueskyPostToHTML(post: any, baseBskyUrl: string = 'https://bsky.app') {
	if (!post?.record) {
		return '';
	}
	const rt = new RichText(post.record);
	let html = '';

	const createLink = (href: string, text: string) => {
		return `<a target="_blank" rel="noopener noreferrer nofollow" href="${encodeURI(href)}">${encodeURI(text)}</a>`;
	};

	for (const segment of rt.segments()) {
		if (!segment) continue;
		if (segment.isLink() && segment.link?.uri) {
			html += createLink(segment.link?.uri, segment.text);
		} else if (segment.isMention() && segment.mention?.did) {
			html += createLink(`${baseBskyUrl}/profile/${segment.mention?.did}`, segment.text);
		} else if (segment.isTag() && segment.tag?.tag) {
			html += createLink(`${baseBskyUrl}/hashtag/${segment.tag?.tag}`, segment.text);
		} else {
			html += segment.text;
		}
	}

	return html.replace(/\n/g, '<br>');
}

export { default as Post } from './Post.svelte';
