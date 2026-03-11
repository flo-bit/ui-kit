<script lang="ts">
	import { onMount } from 'svelte';
	import { createEditor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';
	import { Markdown } from '@tiptap/markdown';
	import type { BaseEditorProps } from './types';
	import { LinkExtension } from '../link';
	import { all, createLowlight } from 'lowlight';
	import { CodeBlockExtension } from '..';

	let {
		content = $bindable(),
		editor = $bindable(),
		ref = $bindable(null),
		class: className,
		placeholder = '',
		markdown = false,
		onupdate,
		ontransaction,
		onlinkadded,
		extensions,
		extraExtensions,
		children
	}: BaseEditorProps = $props();

	onMount(() => {
		const exts = extensions ?? [
			StarterKit.configure({ link: false, codeBlock: false }),
			LinkExtension.configure({ onlinkadded }),
			CodeBlockExtension.configure({
				lowlight: createLowlight(all)
			})
		];

		const allExtensions = [
			...exts,
			...(extraExtensions ?? []),
			...(placeholder ? [Placeholder.configure({ placeholder })] : []),
			...(markdown ? [Markdown] : [])
		];

		editor = createEditor({
			extensions: allExtensions,
			content,
			...(markdown ? { contentType: 'markdown' } : {}),

			editorProps: {
				attributes: {
					class: 'outline-none'
				}
			},
			onUpdate: (ctx) => {
				if (markdown && typeof ctx.editor.getMarkdown === 'function') {
					content = ctx.editor.getMarkdown();
				} else {
					content = ctx.editor.getJSON();
				}
				onupdate?.(content);
			},
			onTransaction: () => {
				ontransaction?.();
			}
		});
	});
</script>

<div bind:this={ref} class={className} role="region">
	{#if $editor}
		<EditorContent editor={$editor} />
		{@render children?.()}
	{/if}
</div>

<style>
	:global(.tiptap p.is-editor-empty:first-child::before) {
		color: var(--color-base-500);
		content: attr(data-placeholder);
		float: left;
		height: 0;
		pointer-events: none;
	}
</style>
