<script lang="ts" module>
	import type { Editor } from 'svelte-tiptap';

	export type BlockTypeItem = {
		id: string;
		label: string;
		isActive: (editor: Editor) => boolean;
		command: (editor: Editor) => void;
	};
</script>

<script lang="ts">
	import { cn } from '@foxui/core';
	import type { Readable } from 'svelte/store';

	const allItems: (BlockTypeItem & { node: string })[] = [
		{
			id: 'paragraph',
			label: 'Paragraph',
			node: 'paragraph',
			isActive: (e) => e.isActive('paragraph'),
			command: (e) => e.chain().focus().setParagraph().run()
		},
		{
			id: 'heading-1',
			label: 'Heading 1',
			node: 'heading',
			isActive: (e) => e.isActive('heading', { level: 1 }),
			command: (e) => e.chain().focus().toggleHeading({ level: 1 }).run()
		},
		{
			id: 'heading-2',
			label: 'Heading 2',
			node: 'heading',
			isActive: (e) => e.isActive('heading', { level: 2 }),
			command: (e) => e.chain().focus().toggleHeading({ level: 2 }).run()
		},
		{
			id: 'heading-3',
			label: 'Heading 3',
			node: 'heading',
			isActive: (e) => e.isActive('heading', { level: 3 }),
			command: (e) => e.chain().focus().toggleHeading({ level: 3 }).run()
		},
		{
			id: 'blockquote',
			label: 'Blockquote',
			node: 'blockquote',
			isActive: (e) => e.isActive('blockquote'),
			command: (e) => e.chain().focus().toggleBlockquote().run()
		},
		{
			id: 'code-block',
			label: 'Code Block',
			node: 'codeBlock',
			isActive: (e) => e.isActive('codeBlock'),
			command: (e) => e.chain().focus().toggleCodeBlock().run()
		},
		{
			id: 'bullet-list',
			label: 'Bullet List',
			node: 'bulletList',
			isActive: (e) => e.isActive('bulletList'),
			command: (e) => e.chain().focus().toggleBulletList().run()
		},
		{
			id: 'ordered-list',
			label: 'Ordered List',
			node: 'orderedList',
			isActive: (e) => e.isActive('orderedList'),
			command: (e) => e.chain().focus().toggleOrderedList().run()
		}
	];

	let {
		editor = $bindable(),
		items: itemsProp,
		class: className
	}: {
		editor: Readable<Editor>;
		items?: BlockTypeItem[];
		class?: string;
	} = $props();

	let items = $derived(
		itemsProp ?? allItems.filter((item) => $editor && !!$editor.schema.nodes[item.node])
	);

	let activeIds = $state(new Set<string>());

	function updateState() {
		const next = new Set<string>();
		for (const item of items) {
			if (item.isActive($editor)) {
				next.add(item.id);
			}
		}
		activeIds = next;
	}

	$effect(() => {
		if (!$editor) return;
		$editor.on('transaction', updateState);
		updateState();
		return () => {
			$editor.off('transaction', updateState);
		};
	});
</script>

<div class={cn('flex flex-wrap gap-1', className)}>
	{#each items as item (item.id)}
		<button
			type="button"
			class={cn(
				'rounded-lg px-2 py-1 text-xs font-medium transition-colors',
				activeIds.has(item.id) && (item.id !== 'paragraph' || activeIds.size === 1)
					? 'bg-accent-500/15 text-accent-700 dark:text-accent-400'
					: 'text-base-500 hover:bg-base-500/10 hover:text-base-700 dark:hover:text-base-300'
			)}
			onclick={() => item.command($editor)}
		>
			{item.label}
		</button>
	{/each}
</div>
