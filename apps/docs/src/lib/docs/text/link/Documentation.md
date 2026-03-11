## Usage

`CoreRichTextEditor` includes `LinkExtension` by default. Pasted and typed URLs are automatically converted to links, and Markdown syntax `[text](url)` is supported out of the box.

```svelte
<CoreRichTextEditor />
```

`FormattingBubbleMenu` automatically includes a `LinkPopover` when the link extension is detected — no extra setup needed.

```svelte
<CoreRichTextEditor bind:editor>
	<FormattingBubbleMenu {editor} />
</CoreRichTextEditor>
```

## Standalone link popover

`LinkPopover` is a toggle button with a popover for editing URLs. It follows the same pattern as `BoldToggle` / `ItalicToggle` — drop it into any toolbar.

```svelte
<LinkPopover {editor} />
```

## Reacting to new links

Use the `onlinkadded` callback to run logic whenever a link is added — whether by typing, pasting, autolink, or the link popover.

Via `CoreRichTextEditor` (uses default extensions):

```svelte
<CoreRichTextEditor
	onlinkadded={({ href, text }) => {
		console.log(`Link added: ${text} → ${href}`);
	}}
/>
```

Or configure it directly on the extension:

```svelte
<CoreRichTextEditor
	extensions={[
		StarterKit.configure({ link: false }),
		LinkExtension.configure({
			onlinkadded: ({ href, text, editor }) => {
				// fetch preview, validate, transform, etc.
			}
		})
	]}
/>
```

## Programmatic usage

```ts
import { setLink, removeLink } from '@foxui/text';

// Set a link on the current selection
setLink(editor, 'https://example.com');

// Remove link from the current selection
removeLink(editor);
```

## How it works

`LinkExtension` wraps `@tiptap/extension-link` with:

- **Autolink** — URLs typed or pasted are automatically detected and linked
- **Markdown syntax** — `[text](url "title")` input and paste rules, with `title` attribute support
- **Configurable** — toggle autolink, markdown, open-on-click behavior, default protocol

`LinkPopover` tracks the current selection via editor transactions. When the selection is inside a link, the toggle is pressed and clicking it opens the popover pre-filled with the current URL.
