## Usage

Add `EmbedExtension` via `extraExtensions` with an array of embed definitions. URLs pasted or typed on their own line will automatically convert to rich embeds.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, EmbedExtension, youtubeEmbed } from '@foxui/text';
</script>

<CoreRichTextEditor
	extraExtensions={[
		EmbedExtension.configure({
			embeds: [youtubeEmbed]
		})
	]}
/>
```

That's it — paste a YouTube URL and it becomes an embedded player.

## How detection works

1. **Paste** — When a URL is pasted as plain text, it's checked against all embed matchers. If one matches, an embed node is inserted immediately.
2. **Typed URLs** — When the user types a URL and moves to the next line (e.g. presses Enter), the link-only paragraph is detected and converted.

## Built-in YouTube embed

The `youtubeEmbed` definition matches common YouTube URL formats:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID`

## Embed modal

Add `EmbedModal` as a child of the editor to let users manually insert embeds via a URL input dialog. It validates the URL against all registered embeds and shows an error if none match.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, EmbedExtension, EmbedModal, youtubeEmbed, openEmbedModal } from '@foxui/text';
</script>

<CoreRichTextEditor bind:editor extraExtensions={[EmbedExtension.configure({ embeds: [youtubeEmbed] })]}>
	{#if $editor}
		<EmbedModal editor={$editor} />
	{/if}
</CoreRichTextEditor>

<!-- Trigger from a button -->
<button onclick={() => openEmbedModal($editor)}>Add Embed</button>
```

The modal is also available from the slash menu — type `/embed` to open it.

You can also control the modal directly with a bindable `open` prop:

```svelte
<EmbedModal editor={$editor} bind:open={embedModalOpen} />
<button onclick={() => embedModalOpen = true}>Add Embed</button>
```

## Programmatic insertion

Use `insertEmbed` to insert an embed from a URL without the modal. Returns `null` on success or an error string.

```typescript
import { insertEmbed } from '@foxui/text';

const error = insertEmbed($editor, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
if (error) console.error(error);
```

## Custom embeds

Create your own embed by defining a `name`, a `match` function, and a Svelte `component`:

```typescript
import type { EmbedDefinition } from '@foxui/text';
import SpotifyPlayer from './SpotifyPlayer.svelte';

const spotifyEmbed: EmbedDefinition = {
	name: 'spotify',
	match: (url) => {
		const m = url.match(/open\.spotify\.com\/track\/(\w+)/);
		return m ? { trackId: m[1] } : false;
	},
	component: SpotifyPlayer
};
```

Your component receives three props:

```svelte
<!-- SpotifyPlayer.svelte -->
<script lang="ts">
	let { url, data, selected }: { url: string; data: Record<string, any>; selected: boolean } =
		$props();
</script>

<iframe
	src="https://open.spotify.com/embed/track/{data.trackId}"
	class="h-20 w-full rounded-lg {selected ? 'ring-2 ring-accent-500' : ''}"
	allow="encrypted-media"
></iframe>
```

Then add it alongside the built-in embeds:

```svelte
<CoreRichTextEditor
	extraExtensions={[
		EmbedExtension.configure({
			embeds: [youtubeEmbed, spotifyEmbed]
		})
	]}
/>
```

## Multiple embed providers

Pass as many embed definitions as you like. The first match wins — order matters.

```typescript
EmbedExtension.configure({
	embeds: [youtubeEmbed, spotifyEmbed, vimeoEmbed, twitterEmbed]
})
```
