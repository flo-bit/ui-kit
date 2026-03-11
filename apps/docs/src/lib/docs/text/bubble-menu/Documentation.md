## Usage

`FormattingBubbleMenu` provides a ready-to-use formatting toolbar that appears when text is selected. It includes bold, italic, underline, strikethrough, and link controls.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, FormattingBubbleMenu, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor>
	<FormattingBubbleMenu {editor} />
</CoreRichTextEditor>
```

## Adding extra controls

Use the `children` snippet to add custom controls after the default formatting toggles.

```svelte
<FormattingBubbleMenu {editor}>
	<MyCustomButton {editor} />
</FormattingBubbleMenu>
```

## Custom bubble menu

Use `BubbleMenu` directly for full control over the menu contents. It provides the styled container and positioning — you supply the controls.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, BubbleMenu, BoldToggle, ItalicToggle, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor>
	<BubbleMenu {editor}>
		<BoldToggle {editor} />
		<ItalicToggle {editor} />
	</BubbleMenu>
</CoreRichTextEditor>
```

## Controlling visibility

Pass `shouldShow` to control when the menu appears. By default, `FormattingBubbleMenu` hides when there's no selection or when inside a code block.

```svelte
<BubbleMenu
	{editor}
	shouldShow={({ editor, from, to }) => from !== to && editor.isActive('paragraph')}
>
	<!-- controls -->
</BubbleMenu>
```

## How it works

Both components wrap svelte-tiptap's `BubbleMenu` with a styled container that supports dark mode. `FormattingBubbleMenu` automatically detects available extensions — for example, `LinkPopover` only appears if the link extension is registered.
