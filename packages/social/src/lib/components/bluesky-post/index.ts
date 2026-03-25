import type { Embed, EmbedRecordData } from '../embed';
import type { PostData } from '../post';
import type { PostView } from '@atcute/bluesky/types/app/feed/defs';
import { segmentize, type Facet, type RichtextSegment } from '@atcute/bluesky-richtext-segmenter';

export type BlueskyHrefs = {
	profile?: (handle: string, did?: string) => string;
	post?: (handle: string, postId: string) => string;
	hashtag?: (tag: string) => string;
};

function defaultHrefs(baseUrl: string): Required<BlueskyHrefs> {
	return {
		profile: (handle, did) => `${baseUrl}/profile/${did ?? handle}`,
		post: (handle, postId) => `${baseUrl}/profile/${handle}/post/${postId}`,
		hashtag: (tag) => `${baseUrl}/hashtag/${tag}`
	};
}

function resolveHrefs(baseUrl: string, hrefs?: BlueskyHrefs): Required<BlueskyHrefs> {
	const defaults = defaultHrefs(baseUrl);
	if (!hrefs) return defaults;
	return {
		profile: hrefs.profile ?? defaults.profile,
		post: hrefs.post ?? defaults.post,
		hashtag: hrefs.hashtag ?? defaults.hashtag
	};
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

interface MentionFeature {
	$type: 'app.bsky.richtext.facet#mention';
	did: string;
}

interface LinkFeature {
	$type: 'app.bsky.richtext.facet#link';
	uri: string;
}

interface TagFeature {
	$type: 'app.bsky.richtext.facet#tag';
	tag: string;
}

type Feature = MentionFeature | LinkFeature | TagFeature;

const renderSegment = (
	segment: RichtextSegment,
	hrefs: Required<BlueskyHrefs>,
	target?: string
) => {
	const { text, features } = segment;
	const escaped = escapeHtml(text);

	if (!features) {
		return `<span>${escaped}</span>`;
	}

	const feature = features[0] as Feature;
	const targetAttr = target ? ` target="${target}"` : '';

	const createLink = (href: string, text: string) => {
		return `<a${targetAttr} rel="noopener noreferrer nofollow" href="${encodeURI(href)}">${text}</a>`;
	};

	switch (feature.$type) {
		case 'app.bsky.richtext.facet#mention':
			return createLink(hrefs.profile(feature.did, feature.did), escaped);
		case 'app.bsky.richtext.facet#link':
			return createLink(feature.uri, escaped);
		case 'app.bsky.richtext.facet#tag':
			return createLink(hrefs.hashtag(feature.tag), escaped);
		default:
			return `<span>${escaped}</span>`;
	}
};

const RichText = (
	{ text, facets }: { text: string; facets?: Facet[] },
	hrefs: Required<BlueskyHrefs>,
	target?: string
) => {
	const segments = segmentize(text, facets);
	return segments.map((v) => renderSegment(v, hrefs, target)).join('');
};

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
		case 'app.bsky.embed.record#view':
		case 'app.bsky.embed.record':
			return 'record';
		case 'app.bsky.embed.recordWithMedia#view':
		case 'app.bsky.embed.recordWithMedia':
			return 'recordWithMedia';
		default:
			return 'unknown';
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractQuotedPost(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	recordView: any,
	hrefs: Required<BlueskyHrefs>,
	target?: string
): EmbedRecordData | null {
	if (!recordView?.author) return null;

	const id = recordView.uri?.split('/').pop();
	const author = recordView.author;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const value = recordView.value as any;

	let htmlContent = '';
	if (value?.text) {
		htmlContent = RichText({ text: value.text, facets: value.facets }, hrefs, target).replace(
			/\n/g,
			'<br>'
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const firstEmbed = recordView.embeds?.[0] as any;
	let embed: Embed | undefined;
	if (firstEmbed) {
		const embedType = blueskyEmbedTypeToEmbedType(firstEmbed.$type);
		if (embedType !== 'record' && embedType !== 'recordWithMedia' && embedType !== 'unknown') {
			embed = convertEmbed(firstEmbed, hrefs, target) ?? undefined;
		}
	}

	return {
		author: {
			displayName: author.displayName || '',
			handle: author.handle,
			avatar: author.avatar,
			href: hrefs.profile(author.handle, author.did)
		},
		href: hrefs.post(author.handle, id),
		htmlContent,
		createdAt: value?.createdAt,
		embed
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertEmbed(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	embedView: any,
	hrefs: Required<BlueskyHrefs>,
	target?: string
): Embed | null {
	const type = blueskyEmbedTypeToEmbedType(embedView?.$type);

	switch (type) {
		case 'images':
			return {
				type: 'images',
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				images: embedView.images?.map((image: any) => ({
					alt: image.alt,
					thumb: image.thumb,
					aspectRatio: image.aspectRatio,
					fullsize: image.fullsize
				}))
			};
		case 'external':
			return embedView.external
				? {
						type: 'external',
						external: {
							href: embedView.external.uri,
							title: embedView.external.title,
							description: embedView.external.description,
							thumb: embedView.external.thumb
						}
					}
				: null;
		case 'video':
			return embedView.playlist
				? {
						type: 'video',
						video: {
							playlist: embedView.playlist,
							thumb: embedView.thumbnail,
							alt: embedView.alt,
							aspectRatio: embedView.aspectRatio
						}
					}
				: null;
		case 'record': {
			const record = extractQuotedPost(embedView.record, hrefs, target);
			return record ? { type: 'record', record } : null;
		}
		default:
			return null;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertEmbeds(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	embedView: any,
	hrefs: Required<BlueskyHrefs>,
	target?: string
): Embed[] {
	const type = blueskyEmbedTypeToEmbedType(embedView?.$type);

	if (type === 'recordWithMedia') {
		const embeds: Embed[] = [];
		if (embedView.media) {
			const media = convertEmbed(embedView.media, hrefs, target);
			if (media) embeds.push(media);
		}
		const record = extractQuotedPost(embedView.record?.record, hrefs, target);
		if (record) embeds.push({ type: 'record', record });
		return embeds;
	}

	const embed = convertEmbed(embedView, hrefs, target);
	return embed ? [embed] : [];
}

const nsfwLabels = ['porn', 'sexual', 'graphic-media', 'nudity'];

function hasNSFWLabel(labels?: string[]): boolean {
	if (!labels) return false;
	return labels.some((label) => nsfwLabels.includes(label));
}

function attachSensitive(embeds: Embed[], labels?: string[]): Embed[] {
	if (!hasNSFWLabel(labels)) return embeds;
	return embeds.map((embed) => {
		if (embed.type === 'images') return { ...embed, sensitive: true };
		if (embed.type === 'video') return { ...embed, sensitive: true };
		return embed;
	});
}

export function blueskyPostToPostData(
	data: PostView,
	baseUrl: string = 'https://bsky.app',
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason?: any,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reply?: any,
	hrefs?: BlueskyHrefs,
	target?: string
): { postData: PostData; embeds: Embed[] } {
	const resolvedHrefs = resolveHrefs(baseUrl, hrefs);
	const post = data;
	const id = post.uri.split('/').pop() ?? '';

	const reposted =
		reason?.$type === 'app.bsky.feed.defs#reasonRepost' && reason?.by
			? {
					handle: reason.by.handle as string,
					href: resolvedHrefs.profile(reason.by.handle, reason.by.did)
				}
			: undefined;

	const replyTo =
		reply?.parent?.author
			? {
					handle: reply.parent.author.handle as string,
					href: resolvedHrefs.post(
						reply.parent.author.handle,
						reply.parent.uri?.split('/').pop() ?? ''
					)
				}
			: undefined;

	const labels = post.labels ? post.labels.map((label) => label.val) : undefined;
	const embeds = post.embed
		? attachSensitive(convertEmbeds(post.embed, resolvedHrefs, target), labels)
		: [];

	const postData: PostData = {
		id,
		href: resolvedHrefs.post(post.author.handle, id),
		reposted,
		replyTo,
		author: {
			displayName: post.author.displayName || '',
			handle: post.author.handle,
			avatar: post.author.avatar,
			href: resolvedHrefs.profile(post.author.handle, post.author.did)
		},
		replyCount: post.replyCount ?? 0,
		repostCount: post.repostCount ?? 0,
		likeCount: post.likeCount ?? 0,
		createdAt: (post.record as { createdAt?: string }).createdAt ?? '',
		embeds,
		htmlContent: blueskyPostToHTML(post, resolvedHrefs, target),
		labels
	};

	return { postData, embeds };
}

export function blueskyPostToHTML(
	post: PostView,
	hrefsOrBaseUrl: Required<BlueskyHrefs> | string = 'https://bsky.app',
	target?: string
) {
	if (!post?.record) {
		return '';
	}

	const hrefs =
		typeof hrefsOrBaseUrl === 'string' ? defaultHrefs(hrefsOrBaseUrl) : hrefsOrBaseUrl;
	const record = post.record as { text?: string; facets?: Facet[] };
	const html = RichText({ text: record.text ?? '', facets: record.facets }, hrefs, target);

	return html.replace(/\n/g, '<br>');
}

export { default as BlueskyPost } from './BlueskyPost.svelte';
export type { BlueskyHrefs as BlueskyPostHrefs };
