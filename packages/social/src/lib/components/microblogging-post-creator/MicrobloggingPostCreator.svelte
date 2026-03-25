<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { Readable } from 'svelte/store';
	import type { MentionItem, JSONContent, SvelteTiptap } from '@foxui/text';
	import type { LinkAddedEvent } from '@foxui/text';

	export interface MicrobloggingPostContent {
		text: string;
		json: JSONContent;
	}
</script>

<script lang="ts">
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
		embed = $bindable<unknown>(undefined),
		onlinkadded,
		embedPreview,
		mentionItem: mentionItemSnippet
	}: {
		class?: string;
		placeholder?: string;
		content?: MicrobloggingPostContent;
		maxLength?: number;
		onupdate?: (content: MicrobloggingPostContent) => void;
		editor?: Readable<SvelteTiptap.Editor>;
		ref?: HTMLDivElement | null;
		searchMentions?: (query: string) => Promise<MentionItem[]>;
		embed?: unknown;
		onlinkadded?: (event: LinkAddedEvent) => void;
		embedPreview?: Snippet<[{ embed: unknown; removeEmbed: () => void }]>;
		mentionItem?: Snippet<
			[{ item: MentionItem; isActive: boolean; select: () => void }]
		>;
	} = $props();

	let charCount = $derived(content.text.length);
	let remaining = $derived(maxLength - charCount);

	let extraExtensions = $derived.by(() => {
		const exts: any[] = [
			LinkExtension.configure({ onlinkadded: handleLinkAdded }),
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

	function handleLinkAdded(event: LinkAddedEvent) {
		if (!embed) {
			embed = { type: 'link', url: event.href, text: event.text };
		}
		onlinkadded?.(event);
	}

	function removeEmbed() {
		embed = undefined;
	}
</script>

<div class={cn('relative', className)}>
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
	>
		{#if searchMentions && $editor}
			<MentionMenu editor={$editor} items={searchMentions} item={mentionItemSnippet} />
		{/if}
	</PlainTextEditor>

	{#if embed && embedPreview}
		<div class="mt-2">
			{@render embedPreview({ embed, removeEmbed })}
		</div>
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
