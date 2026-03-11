## Usage

Individual formatting toggle buttons for bold, italic, underline, and strikethrough. Drop them into any toolbar or bubble menu.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, BoldToggle, ItalicToggle, UnderlineToggle, StrikethroughToggle, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor />
{#if $editor}
	<div class="flex gap-1">
		<BoldToggle {editor} />
		<ItalicToggle {editor} />
		<UnderlineToggle {editor} />
		<StrikethroughToggle {editor} />
	</div>
{/if}
```

## Reading state

Each toggle exposes a bindable state prop (`isBold`, `isItalic`, `isUnderline`, `isStrikethrough`) that reactively tracks whether the mark is active at the current selection.

```svelte
<script lang="ts">
	let isBold = $state(false);
</script>

<BoldToggle {editor} bind:isBold />
<p>Bold is {isBold ? 'on' : 'off'}</p>
```

## In a bubble menu

These toggles are what `FormattingBubbleMenu` uses internally. You can also use them inside a custom `BubbleMenu`.

```svelte
<BubbleMenu {editor}>
	<BoldToggle {editor} />
	<ItalicToggle {editor} />
</BubbleMenu>
```

## How it works

Each toggle uses `@foxui/core`'s `Toggle` component and listens to editor transactions to stay in sync. Clicking a toggle calls the corresponding tiptap chain command (e.g. `toggleBold()`).
