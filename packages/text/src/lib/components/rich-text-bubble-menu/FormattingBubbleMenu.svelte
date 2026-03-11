<script lang="ts">
	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';
	import { BubbleMenu } from '.';

	import { BoldToggle, ItalicToggle, StrikethroughToggle, UnderlineToggle } from '../formatting';
	import { LinkPopover } from '../link';
	import type { Snippet } from 'svelte';

	let {
		editor = $bindable(),
		class: className,
		children
	}: {
		editor: Readable<Editor>;
		class?: string;
		children?: Snippet;
	} = $props();

	let hasLink = $derived(
		$editor?.extensionManager.extensions.some((ext) => ext.name === 'link') ?? false
	);
</script>

<BubbleMenu
	{editor}
	class={className}
	shouldShow={({ editor, from, to }) => from !== to && !editor.isActive('codeBlock')}
>
	<BoldToggle {editor} />
	<ItalicToggle {editor} />
	<UnderlineToggle {editor} />
	<StrikethroughToggle {editor} />
	{#if hasLink}
		<LinkPopover {editor} />
	{/if}

	{@render children?.()}
</BubbleMenu>
