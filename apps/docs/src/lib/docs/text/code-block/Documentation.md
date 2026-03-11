## Usage

`CoreRichTextEditor` includes `CodeBlockExtension` by default — code blocks work out of the box with syntax highlighting and a copy button.

```svelte
<script lang="ts">
	import { CoreRichTextEditor } from '@foxui/text';
</script>

<CoreRichTextEditor placeholder="Type ``` to create a code block..." />
```

## Copy button

`CodeBlockView` includes a copy-to-clipboard button that appears on hover. It shows a checkmark for 2 seconds after copying.

## Custom code block component

Pass `codeBlockComponent` to replace the default rendering with your own Svelte component. Your component receives tiptap's `NodeViewProps`.

```svelte
<CoreRichTextEditor
	extraExtensions={[
		CodeBlockExtension.configure({
			lowlight: createLowlight(all),
			codeBlockComponent: MyCustomCodeBlock
		})
	]}
/>
```
