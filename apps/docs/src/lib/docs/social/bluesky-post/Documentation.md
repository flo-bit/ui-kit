The `BlueskyPost` component renders a Bluesky post directly from the raw API response (`PostView`). It handles converting the data, rich text facets, embeds, and NSFW labels automatically.

Fetch posts using the [Bluesky API](https://docs.bsky.app/docs/api/app-bsky-feed-get-author-feed) and pass each post's `post` and `reason` fields directly to the component.

Use `blueskyPostToPostData` if you need to convert the data yourself for use with the generic `Post` component.
