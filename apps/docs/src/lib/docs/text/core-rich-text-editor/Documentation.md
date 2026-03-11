## Usage

```svelte
<script lang="ts">
	import { CoreRichTextEditor } from '@foxui/text';
</script>

<CoreRichTextEditor placeholder="Start writing..." />
```

## Binding the editor

Bind the `editor` store to access the tiptap Editor instance for programmatic control or to pass to child components like `FormattingBubbleMenu`.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, FormattingBubbleMenu, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor placeholder="Write something...">
	<FormattingBubbleMenu {editor} />
</CoreRichTextEditor>
```

## Binding content

Use `bind:content` to read or control the editor content. Content is a tiptap `Content` type (JSON by default).

```svelte
<script lang="ts">
	import { CoreRichTextEditor } from '@foxui/text';

	let content = $state();
</script>

<CoreRichTextEditor bind:content placeholder="Write here..." />
```

## Markdown mode

Enable `markdown` to parse Markdown input and serialize content back to Markdown strings instead of JSON.

```svelte
<CoreRichTextEditor markdown bind:content placeholder="Write Markdown..." />
```

## Extra extensions

Use `extraExtensions` to add extensions alongside the defaults (StarterKit, LinkExtension, CodeBlockExtension). Use `extensions` to replace defaults entirely.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, ImageExtension, MentionNode } from '@foxui/text';
</script>

<CoreRichTextEditor
	extraExtensions={[
		ImageExtension.configure({ upload: myUpload }),
		MentionNode
	]}
/>
```

## Default extensions

`CoreRichTextEditor` includes these extensions by default:

- **StarterKit** — paragraphs, headings, lists, blockquote, code, bold, italic, strike, etc.
- **LinkExtension** — autolink, paste detection, Markdown link syntax
- **CodeBlockExtension** — code blocks with syntax highlighting and copy button
- **Placeholder** — shown when editor is empty (if `placeholder` prop is set)
