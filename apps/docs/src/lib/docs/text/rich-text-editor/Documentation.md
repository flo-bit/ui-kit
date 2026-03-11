## Usage

```svelte
<script lang="ts">
	import { RichTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<RichTextEditor bind:content placeholder="Write something..." />
```

This gives you a fully featured editor with a formatting bubble menu and `/` slash commands out of the box.

## Image uploads

Pass an upload function to `image` to enable image paste, drop, and the `/image` slash command. Images use `EditableImage` (with alt text editing) by default.

```svelte
<script lang="ts">
	import { RichTextEditor } from '@foxui/text';

	async function upload(file: File, onProgress: (p: number) => void, signal: AbortSignal) {
		const res = await fetch('/api/upload', { method: 'POST', body: file, signal });
		return (await res.json()).url;
	}
</script>

<RichTextEditor image={upload} />
```

## Embeds

Pass `embeds={true}` for built-in YouTube embeds, or pass an array of custom `EmbedDefinition`s. An embed modal is automatically included, and `/embed` appears in the slash menu.

```svelte
<!-- YouTube embeds -->
<RichTextEditor embeds={true} />

<!-- Custom embed providers -->
<RichTextEditor embeds={[youtubeEmbed, spotifyEmbed]} />
```

## Disabling features

Turn off individual features with boolean props.

```svelte
<!-- No bubble menu -->
<RichTextEditor bubbleMenu={false} />

<!-- No slash menu -->
<RichTextEditor slashMenu={false} />
```

## All CoreRichTextEditor props

`RichTextEditor` passes all props through to `CoreRichTextEditor`, so you can use `extraExtensions`, `markdown`, `onlinkadded`, etc.

```svelte
<RichTextEditor
	image={upload}
	embeds={true}
	markdown
	placeholder="Write Markdown..."
/>
```
