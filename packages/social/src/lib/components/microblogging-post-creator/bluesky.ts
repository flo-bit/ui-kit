import type { MentionItem } from '@foxui/text';
import { searchActorsTypeahead } from '../atproto-handle-popup/helper';

export { editorJsonToBlueskyPost } from './facets';
export type { BlueskyPostContent, BlueskyFacet } from './facets';

/**
 * Creates a mention search function for Bluesky actors.
 * Use this with the `searchMentions` prop of MicrobloggingPostCreator.
 *
 * @example
 * ```svelte
 * <MicrobloggingPostCreator searchMentions={createBlueskyMentionSearch()} />
 * ```
 */
export function createBlueskyMentionSearch(host?: string) {
	return async (query: string): Promise<MentionItem[]> => {
		const result = await searchActorsTypeahead(query, 8, host);
		return result.actors.map((actor) => ({
			id: actor.did,
			label: actor.handle,
			avatar: actor.avatar,
			data: { displayName: actor.displayName }
		}));
	};
}
