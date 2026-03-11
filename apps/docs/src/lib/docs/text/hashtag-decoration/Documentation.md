## Usage

`HashtagDecoration` highlights `#hashtags` in the editor with a CSS class. Add it via `extraExtensions` and style the `.hashtag` class.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, HashtagDecoration } from '@foxui/text';
</script>

<CoreRichTextEditor
	extraExtensions={[HashtagDecoration]}
	placeholder="Try typing #hello..."
/>

<style>
	:global(.hashtag) {
		color: var(--color-accent-600);
		font-weight: 500;
	}
</style>
```

## How it works

`HashtagDecoration` is a tiptap Extension that creates ProseMirror decorations for hashtag patterns. It scans text nodes for `#word` patterns and applies `class="hashtag"` as an inline decoration.

The regex supports:
- Standard ASCII letters and digits: `#hello`, `#tag123`
- International characters: `#café`, `#über`, `#naïve`

Hashtags must start with a letter after the `#` — `#123` won't match.

## Styling

The extension only adds the `hashtag` CSS class — you control the visual style. Some examples:

```css
/* Accent color */
:global(.hashtag) {
	color: var(--color-accent-600);
}

/* Blue with background */
:global(.hashtag) {
	color: #2563eb;
	background: #2563eb15;
	border-radius: 4px;
	padding: 0 2px;
}
```
