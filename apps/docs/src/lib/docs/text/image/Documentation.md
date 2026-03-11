## Usage

Add `ImageExtension` via `extraExtensions` with an `upload` function. Images can then be pasted, dropped, or inserted programmatically.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, ImageExtension, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();

	async function upload(file: File, onProgress: (p: number) => void, signal: AbortSignal) {
		const res = await fetch('/api/upload', { method: 'POST', body: file, signal });
		return (await res.json()).url;
	}
</script>

<CoreRichTextEditor
	bind:editor
	extraExtensions={[ImageExtension.configure({ upload })]}
/>
```

That's it — paste or drag-drop an image and it will upload automatically.

## Programmatic insertion

Use `pickAndInsertImage` to open a file picker, or `insertImage` to insert a file directly. Great for toolbar buttons or slash menu items.

```svelte
<script lang="ts">
	import { pickAndInsertImage, insertImage } from '@foxui/text';
</script>

<!-- File picker button -->
<button onclick={() => pickAndInsertImage($editor)}>Add Image</button>

<!-- Insert a file you already have -->
<button onclick={() => insertImage($editor, myFile)}>Insert</button>
```

## Slash menu integration

Add an image item to `SlashMenu` for a `/image` command.

```svelte
<SlashMenu
	editor={$editor}
	items={[
		{
			id: 'image',
			label: 'Image',
			command: ({ editor, range }) => {
				editor.chain().focus().deleteRange(range).run();
				pickAndInsertImage(editor);
			}
		}
	]}
/>
```

## Editable alt text

Use the built-in `EditableImage` component to let users edit alt text. It shows a pencil button on hover that opens a modal with a textarea.

```svelte
<script lang="ts">
	import { ImageExtension, EditableImage } from '@foxui/text';
</script>

<CoreRichTextEditor
	extraExtensions={[
		ImageExtension.configure({
			upload: myUpload,
			imageComponent: EditableImage
		})
	]}
/>
```

## Custom image component

Pass `imageComponent` to replace the default `<img>` rendering with your own Svelte component. Your component receives tiptap's `NodeViewProps` — use `props.node.attrs.src` for the image URL and `props.updateAttributes()` to update node data.

```svelte
<!-- CustomImage.svelte -->
<script lang="ts">
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';

	let props: NodeViewProps = $props();
</script>

<NodeViewWrapper>
	<figure class="my-4">
		<img
			src={props.node.attrs.src}
			alt={props.node.attrs.alt}
			class="rounded-lg shadow-md"
		/>
		{#if props.node.attrs.alt}
			<figcaption class="mt-1 text-sm text-gray-500">{props.node.attrs.alt}</figcaption>
		{/if}
	</figure>
</NodeViewWrapper>
```

```svelte
<script lang="ts">
	import { ImageExtension } from '@foxui/text';
	import CustomImage from './CustomImage.svelte';
</script>

<CoreRichTextEditor
	extraExtensions={[
		ImageExtension.configure({
			upload: myUpload,
			imageComponent: CustomImage
		})
	]}
/>
```

## How it works

`ImageExtension` is a single tiptap Extension that bundles everything:

- **`@tiptap/extension-image`** for rendering final `<img>` elements
- **Upload placeholder node** with a Svelte NodeView showing a preview and progress bar
- **ProseMirror plugins** for `handlePaste` and `handleDrop` — no external DOM handlers needed
- **Extension storage** with a runtime `Map` so `File` objects reach the upload function (node attributes stay serializable)

When an image is inserted, a blob preview is shown immediately. The `upload` function runs in the background. Once it resolves, the placeholder is replaced with a final image using the **returned URL**.

## Works with any editor

`ImageExtension` works with `CoreRichTextEditor`, `RichTextEditor`, or any tiptap editor that supports `extraExtensions`.
