## Usage

```svelte
<script lang="ts">
	import { BlueskyPostCreator, type BlueskyPostContent } from '@foxui/social';

	let content: BlueskyPostContent = $state({ text: '', facets: [] });
</script>

<BlueskyPostCreator
	bind:content
	placeholder="What's on your mind?"
	maxLength={300}
/>
```

## Features

- **@mentions** - Type `@` followed by at least 2 characters to search for Bluesky handles. Select from the popup to insert a mention with the user's DID.
- **Links** - URLs are automatically detected and linked.
- **#hashtags** - Type `#tag` and hashtags are automatically detected in the output facets.
- **Character count** - Shows remaining characters with color indicators (amber < 20, red when over limit).

## Output

The `content` bindable returns a `BlueskyPostContent` object:

```typescript
{
	text: string;        // Plain text of the post
	facets: BlueskyFacet[];  // Byte-indexed facets for mentions, links, and tags
}
```

Each facet has the Bluesky AT Protocol format with `index.byteStart`, `index.byteEnd`, and `features` array containing the facet type (`#mention`, `#link`, or `#tag`).
