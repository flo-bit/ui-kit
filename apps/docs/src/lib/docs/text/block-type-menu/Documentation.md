## Usage

`BlockTypeMenu` renders a row of block type buttons that reflect the current selection. Click a button to toggle between paragraph, headings, lists, and more.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, BlockTypeMenu, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor />
{#if $editor}
	<BlockTypeMenu {editor} />
{/if}
```

Default items include Paragraph, Heading 1–3, Blockquote, Code Block, Bullet List, and Ordered List. Only items with registered extensions are shown.

## Custom items

Pass `items` to customize the available block types.

```svelte
<script lang="ts">
	import { BlockTypeMenu, type BlockTypeItem } from '@foxui/text';

	const items: BlockTypeItem[] = [
		{
			id: 'paragraph',
			label: 'P',
			isActive: (e) => e.isActive('paragraph'),
			command: (e) => e.chain().focus().setParagraph().run()
		},
		{
			id: 'heading-1',
			label: 'H1',
			isActive: (e) => e.isActive('heading', { level: 1 }),
			command: (e) => e.chain().focus().toggleHeading({ level: 1 }).run()
		}
	];
</script>

<BlockTypeMenu {editor} {items} />
```

## How it works

`BlockTypeMenu` listens to editor transactions and tracks which items are active. The active item is highlighted with an accent color. Paragraph is only highlighted when it's the only active item — so it doesn't show as active alongside a heading or list.
