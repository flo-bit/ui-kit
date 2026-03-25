## Usage

```svelte
<script lang="ts">
	import {
		MicrobloggingPostCreator,
		createBlueskyMentionSearch,
		type MicrobloggingPostContent
	} from '@foxui/social';

	let content: MicrobloggingPostContent = $state({ text: '', json: { type: 'doc' } });
</script>

<MicrobloggingPostCreator
	bind:content
	searchMentions={createBlueskyMentionSearch()}
	maxLength={300}
/>
```

## Features

- **@mentions** - Provide a `searchMentions` function to enable mention support. Type `@` followed by at least 2 characters to trigger the search popup.
- **Links** - URLs are automatically detected and linked.
- **#hashtags** - Hashtags are visually highlighted in the editor.
- **Embeds** - When a link is added and no embed exists, the `embed` prop is automatically set to `{ type: 'link', url, text }`. Provide an `embedPreview` snippet to render it.
- **Character count** - Shows remaining characters with color indicators (amber < 20, red when over limit).

## Bluesky Integration

Use the provided helpers for Bluesky:

```svelte
<script lang="ts">
	import {
		MicrobloggingPostCreator,
		createBlueskyMentionSearch,
		editorJsonToBlueskyPost,
		type MicrobloggingPostContent
	} from '@foxui/social';

	let content: MicrobloggingPostContent = $state({ text: '', json: { type: 'doc' } });

	// Convert to Bluesky format when posting
	function post() {
		const blueskyContent = editorJsonToBlueskyPost(content.json);
		// blueskyContent.text + blueskyContent.facets
	}
</script>

<MicrobloggingPostCreator
	bind:content
	searchMentions={createBlueskyMentionSearch()}
/>
```

## Embeds

Bind the `embed` prop and provide an `embedPreview` snippet to show embed previews:

```svelte
<script lang="ts">
	import { MicrobloggingPostCreator } from '@foxui/social';

	let embed = $state();
</script>

<MicrobloggingPostCreator bind:embed>
	{#snippet embedPreview({ embed, removeEmbed })}
		<div class="flex items-center gap-2 rounded-xl border p-3">
			<span class="flex-1 truncate text-sm">{embed.url}</span>
			<button onclick={removeEmbed}>Remove</button>
		</div>
	{/snippet}
</MicrobloggingPostCreator>
```
