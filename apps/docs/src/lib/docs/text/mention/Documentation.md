## Usage

Add `MentionNode` via `extraExtensions`, then render `MentionMenu` as a child — similar to how `BubbleMenu` and `FloatingMenu` work in svelte-tiptap.

```svelte
<script lang="ts">
	import {
		CoreRichTextEditor,
		MentionNode,
		MentionMenu,
		type MentionItem
	type SvelteTiptap
	} from '@foxui/text';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();

	async function searchUsers(query: string): Promise<MentionItem[]> {
		const res = await fetch(`/api/users?q=${query}`);
		const users = await res.json();
		return users.map((u) => ({
			id: u.id,
			label: u.name,
			avatar: u.avatarUrl
		}));
	}
</script>

<CoreRichTextEditor
	bind:editor
	extraExtensions={[MentionNode]}
>
	{#if $editor}
		<MentionMenu editor={$editor} items={searchUsers}>
			{#snippet item({ item: mentionItem, isActive, select })}
				<button onclick={select}>
					{mentionItem.label}
				</button>
			{/snippet}
		</MentionMenu>
	{/if}
</CoreRichTextEditor>
```

## Custom rendering

The `item` snippet receives `{ item, isActive, select }`. Use this to fully customize how each suggestion looks — add avatars, secondary text, keyboard highlight styling, etc.

If no `item` snippet is provided, a minimal default rendering is used.

## How it works

`MentionNode` is a tiptap Node extension that defines an inline, non-editable mention node with `id`, `label`, and optional `data` attributes.

`MentionMenu` follows the same pattern as svelte-tiptap's `BubbleMenu` — it takes an `editor` prop and registers a suggestion plugin on mount. The popup is positioned using `@floating-ui/dom` and supports keyboard navigation (Arrow keys + Enter + Escape).

## Works with any editor

Both `CoreRichTextEditor` and `RichTextEditor` support `extraExtensions` to add extensions without replacing defaults. You can also use `MentionNode` + `MentionMenu` with any tiptap editor setup.
