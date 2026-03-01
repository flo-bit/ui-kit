<script lang="ts">
	import { BubbleMenu, type Editor } from 'svelte-tiptap';
	import FormattingToolbar from './FormattingToolbar.svelte';
	import LinkEditor from './LinkEditor.svelte';

	type RichTextTypes =
		| 'paragraph'
		| 'heading-1'
		| 'heading-2'
		| 'heading-3'
		| 'blockquote'
		| 'code'
		| 'bullet-list'
		| 'ordered-list';

	let {
		editor,
		bold = true,
		italic = true,
		underline = true,
		strikethrough = true,
		link = true,
		blockType = true
	}: {
		editor: Editor;
		bold?: boolean;
		italic?: boolean;
		underline?: boolean;
		strikethrough?: boolean;
		link?: boolean;
		blockType?: boolean;
	} = $props();

	let isBold = $state(false);
	let isItalic = $state(false);
	let isUnderline = $state(false);
	let isStrikethrough = $state(false);
	let isLink = $state(false);
	let selectedType: RichTextTypes = $state('paragraph');

	function updateState() {
		isBold = editor.isActive('bold');
		isItalic = editor.isActive('italic');
		isUnderline = editor.isActive('underline');
		isStrikethrough = editor.isActive('strike');
		isLink = editor.isActive('link');

		if (editor.isActive('heading', { level: 1 })) {
			selectedType = 'heading-1';
		} else if (editor.isActive('heading', { level: 2 })) {
			selectedType = 'heading-2';
		} else if (editor.isActive('heading', { level: 3 })) {
			selectedType = 'heading-3';
		} else if (editor.isActive('blockquote')) {
			selectedType = 'blockquote';
		} else if (editor.isActive('code')) {
			selectedType = 'code';
		} else if (editor.isActive('bulletList')) {
			selectedType = 'bullet-list';
		} else if (editor.isActive('orderedList')) {
			selectedType = 'ordered-list';
		} else {
			selectedType = 'paragraph';
		}
	}

	function switchTo(value: RichTextTypes) {
		editor.chain().focus().setParagraph().run();

		if (value === 'heading-1') {
			editor.chain().focus().setNode('heading', { level: 1 }).run();
		} else if (value === 'heading-2') {
			editor.chain().focus().setNode('heading', { level: 2 }).run();
		} else if (value === 'heading-3') {
			editor.chain().focus().setNode('heading', { level: 3 }).run();
		} else if (value === 'blockquote') {
			editor.chain().focus().setBlockquote().run();
		} else if (value === 'code') {
			editor.chain().focus().setCodeBlock().run();
		} else if (value === 'bullet-list') {
			editor.chain().focus().toggleBulletList().run();
		} else if (value === 'ordered-list') {
			editor.chain().focus().toggleOrderedList().run();
		}
	}

	function handleLinkClick() {
		if (isLink) {
			// Already a link — the link BubbleMenu will handle editing
			return;
		}
		// Set an empty link mark — this triggers isLink=true, which shows LinkEditor
		editor.chain().focus().setLink({ href: '' }).run();
	}

	$effect(() => {
		editor.on('transaction', updateState);
		updateState();

		return () => {
			editor.off('transaction', updateState);
		};
	});
</script>

<BubbleMenu
	{editor}
	shouldShow={({ editor: e }) => {
		return (
			!e.isActive('image') &&
			!e.view.state.selection.empty &&
			!e.isActive('codeBlock') &&
			!e.isActive('link') &&
			!e.isActive('imageUpload')
		);
	}}
	pluginKey="formatting-bubble-menu"
>
	<div
		class="bg-base-50 dark:bg-base-900 border-base-500/20 dark:border-base-700/20 relative w-fit rounded-2xl border px-1 py-1 shadow-lg backdrop-blur-sm"
	>
		<FormattingToolbar
			{editor}
			{isBold}
			{isItalic}
			{isUnderline}
			{isStrikethrough}
			{isLink}
			bind:selectedType
			{switchTo}
			onLinkClick={handleLinkClick}
			showBold={bold}
			showItalic={italic}
			showUnderline={underline}
			showStrikethrough={strikethrough}
			showLink={link}
			showBlockType={blockType}
		/>
	</div>
</BubbleMenu>

{#if link}
	<BubbleMenu
		{editor}
		shouldShow={({ editor: e }) => {
			return e.isActive('link');
		}}
		pluginKey="link-bubble-menu"
	>
		<div
			class="bg-base-50 dark:bg-base-900 border-base-500/20 dark:border-base-700/20 relative w-fit rounded-2xl border px-1 py-1 shadow-lg backdrop-blur-sm"
		>
			<LinkEditor {editor} />
		</div>
	</BubbleMenu>
{/if}
