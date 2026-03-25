<script lang="ts" module>
	import type { Readable } from 'svelte/store';
	import type { MentionItem, JSONContent, SvelteTiptap } from '@foxui/text';
	import type { LinkAddedEvent } from '@foxui/text';

	export interface MicrobloggingPostContent {
		text: string;
		json: JSONContent;
	}
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import {
		PlainTextEditor,
		MentionNode,
		MentionMenu,
		HashtagDecoration,
		LinkExtension
	} from '@foxui/text';
	import { cn } from '@foxui/core';

	function extractText(json: JSONContent): string {
		let text = '';
		function walk(node: JSONContent) {
			if (node.type === 'doc') {
				for (const child of node.content ?? []) walk(child);
			} else if (node.type === 'paragraph') {
				if (text.length > 0) text += '\n';
				for (const child of node.content ?? []) walk(child);
			} else if (node.type === 'mention') {
				text += `@${node.attrs?.label ?? node.attrs?.id}`;
			} else if (node.type === 'text') {
				text += node.text ?? '';
			}
		}
		walk(json);
		return text;
	}

	let {
		class: className,
		placeholder = "What's on your mind?",
		content = $bindable<MicrobloggingPostContent>({ text: '', json: { type: 'doc' } }),
		maxLength = 300,
		onupdate,
		editor = $bindable<Readable<SvelteTiptap.Editor>>(),
		ref = $bindable<HTMLDivElement | null>(null),
		searchMentions,
		onlinkadded,
		onimageadded,
		onvideoadded,
		mentionItem: mentionItemSnippet,
		textEditorClass = "",
		children
	}: {
		class?: string;
		placeholder?: string;
		content?: MicrobloggingPostContent;
		maxLength?: number;
		onupdate?: (content: MicrobloggingPostContent) => void;
		editor?: Readable<SvelteTiptap.Editor>;
		ref?: HTMLDivElement | null;
		searchMentions?: (query: string) => Promise<MentionItem[]>;
		onlinkadded?: (event: LinkAddedEvent) => void;
		onimageadded?: (files: File[]) => void;
		onvideoadded?: (files: File[]) => void;
		mentionItem?: Snippet<
			[{ item: MentionItem; isActive: boolean; select: () => void }]
		>;
		textEditorClass?: string;
		children?: Snippet;
	} = $props();

	let acceptsMedia = $derived(!!onimageadded || !!onvideoadded);
	let dragCounter = $state(0);
	let dragging = $derived(dragCounter > 0);

	function handleFiles(files: File[]) {
		const images = files.filter((f) => f.type.startsWith('image/'));
		const videos = files.filter((f) => f.type.startsWith('video/'));
		if (images.length && onimageadded) onimageadded(images);
		if (videos.length && onvideoadded) onvideoadded(videos);
	}

	function handlePaste(e: ClipboardEvent) {
		if (!acceptsMedia || !e.clipboardData?.files.length) return;
		const files = Array.from(e.clipboardData.files).filter(
			(f) =>
				(onimageadded && f.type.startsWith('image/')) ||
				(onvideoadded && f.type.startsWith('video/'))
		);
		if (files.length) {
			e.preventDefault();
			handleFiles(files);
		}
	}

	function handleDrop(e: DragEvent) {
		dragCounter = 0;
		if (!acceptsMedia || !e.dataTransfer?.files.length) return;
		const files = Array.from(e.dataTransfer.files).filter(
			(f) =>
				(onimageadded && f.type.startsWith('image/')) ||
				(onvideoadded && f.type.startsWith('video/'))
		);
		if (files.length) {
			e.preventDefault();
			handleFiles(files);
		}
	}

	function handleDragEnter(e: DragEvent) {
		if (!acceptsMedia) return;
		e.preventDefault();
		dragCounter++;
	}

	function handleDragOver(e: DragEvent) {
		if (!acceptsMedia) return;
		e.preventDefault();
	}

	function handleDragLeave() {
		dragCounter--;
	}

	let charCount = $derived(content.text.length);
	let remaining = $derived(maxLength - charCount);

	let extraExtensions = $derived.by(() => {
		const exts: any[] = [
			LinkExtension.configure({ onlinkadded }),
			HashtagDecoration
		];
		if (searchMentions) {
			exts.push(
				MentionNode.configure({
					HTMLAttributes: {
						class: 'text-accent-600 dark:text-accent-400 font-medium'
					}
				})
			);
		}
		return exts;
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={cn('relative', className)}
	onpaste={handlePaste}
	ondrop={handleDrop}
	ondragenter={handleDragEnter}
	ondragover={handleDragOver}
	ondragleave={handleDragLeave}
>
	{#if dragging}
		<div
			class="border-accent-500 bg-accent-500/10 absolute inset-0 z-10 flex items-center justify-center rounded-lg border-2 border-dashed"
		>
			<span class="text-accent-600 dark:text-accent-400 text-sm font-medium">
				Drop {onimageadded && onvideoadded ? 'image or video' : onimageadded ? 'image' : 'video'} here
			</span>
		</div>
	{/if}
	<PlainTextEditor
		bind:editor
		bind:ref
		{placeholder}
		{extraExtensions}
		onupdate={(c) => {
			const json = c as JSONContent;
			content = { text: extractText(json), json };
			onupdate?.(content);
		}}
		class={textEditorClass}
	>
		{#if searchMentions && $editor}
			<MentionMenu editor={$editor} items={searchMentions} item={mentionItemSnippet} />
		{/if}
	</PlainTextEditor>

	{#if children}
		{@render children()}
	{/if}

	{#if maxLength}
		<div
			class={cn(
				'mt-1 text-right text-xs tabular-nums',
				remaining < 0
					? 'text-red-500'
					: remaining < 20
						? 'text-amber-500'
						: 'text-base-400'
			)}
		>
			{remaining}
		</div>
	{/if}
</div>

<style>
	:global(.tiptap .hashtag) {
		color: var(--color-accent-600);
	}

	:global(.dark .tiptap .hashtag) {
		color: var(--color-accent-400);
	}
</style>
