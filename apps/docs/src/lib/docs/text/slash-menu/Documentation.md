## Usage

`SlashMenu` adds a `/` command menu to the editor. Type `/` to open it, then search and select a block type.

```svelte
<script lang="ts">
	import { CoreRichTextEditor, SlashMenu, type SvelteTiptap } from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();
</script>

<CoreRichTextEditor bind:editor>
	<SlashMenu editor={$editor} />
</CoreRichTextEditor>
```

Default items include Paragraph, Heading 1–3, Blockquote, Code Block, Bullet List, and Ordered List. Image and Embed items appear automatically when those extensions are registered.

## Custom items

Pass `items` as an array or a function for dynamic/async items.

```svelte
<SlashMenu
	editor={$editor}
	items={[
		{
			id: 'heading-1',
			label: 'Heading 1',
			description: 'Large heading',
			command: ({ editor, range }) => {
				editor.chain().focus().deleteRange(range).toggleHeading({ level: 1 }).run();
			}
		},
		{
			id: 'divider',
			label: 'Divider',
			description: 'Horizontal rule',
			command: ({ editor, range }) => {
				editor.chain().focus().deleteRange(range).setHorizontalRule().run();
			}
		}
	]}
/>
```

## Async items

Pass a function to load items dynamically. The function receives the search query.

```svelte
<SlashMenu
	editor={$editor}
	items={async (query) => {
		const items = getSlashMenuItems($editor);
		return items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
	}}
/>
```

## Custom item rendering

Use the `item` snippet to customize how each menu item looks.

```svelte
<SlashMenu editor={$editor}>
	{#snippet item({ item: menuItem, isActive, select })}
		<button onclick={select} class:active={isActive}>
			{menuItem.label}
			{#if menuItem.description}
				<span class="text-sm text-gray-500">{menuItem.description}</span>
			{/if}
		</button>
	{/snippet}
</SlashMenu>
```

## Helper functions

```ts
import { getSlashMenuItems, getBlockTypeItems, getImageItem } from '@foxui/text';

// All available items for the editor
const items = getSlashMenuItems(editor);

// Block type items only (no image/embed)
const blockItems = getBlockTypeItems(editor);

// Image item (or undefined if ImageExtension not registered)
const imageItem = getImageItem(editor);
```
