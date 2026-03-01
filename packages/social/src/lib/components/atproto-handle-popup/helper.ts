export type Profile = {
	handle: string;
	displayName: string;
	avatar: string;
	did: string;
};

/**
 * Searches for actors with typeahead/autocomplete functionality.
 */
export async function searchActorsTypeahead(
	q: string,
	limit: number = 10,
	host?: string
): Promise<{
	actors: Profile[];
	q: string;
}> {
	host ??= 'https://public.api.bsky.app';

	const response = await fetch(
		host + '/xrpc/app.bsky.actor.searchActorsTypeahead?q=' + q + '&limit=' + limit
	);

	if (!response.ok) return { actors: [], q };

	const data = await response.json();
	console.log(data);

	return { actors: data.actors, q };
}
