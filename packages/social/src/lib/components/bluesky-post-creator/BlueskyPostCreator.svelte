<script lang="ts">
	import {
		CoreRichTextEditor,
		MentionNode,
		MentionMenu,
		HashtagDecoration,
		type MentionItem,
		type JSONContent
	} from '@foxui/text';
	import type { Editor } from '@foxui/text';
	import { cn, Avatar } from '@foxui/core';
	import { searchActorsTypeahead } from '../atproto-handle-popup/helper';
	import { editorJsonToBlueskyPost, type BlueskyPostContent } from './facets';
	import type { Readable } from 'svelte/store';

	let {
		class: className,
		placeholder = "What's on your mind?",
		content = $bindable<BlueskyPostContent>({ text: '', facets: [] }),
		maxLength = 300,
		onupdate,
		editor = $bindable<Readable<Editor>>(),
		ref = $bindable<HTMLDivElement | null>(null),
		host
	}: {
		class?: string;
		placeholder?: string;
		content?: BlueskyPostContent;
		maxLength?: number;
		onupdate?: (content: BlueskyPostContent) => void;
		editor?: Readable<Editor>;
		ref?: HTMLDivElement | null;
		host?: string;
	} = $props();

	let charCount = $derived(content.text.length);
	let remaining = $derived(maxLength - charCount);

	async function searchMentions(query: string): Promise<MentionItem[]> {
		const result = await searchActorsTypeahead(query, 8, host);
		return result.actors.map((actor) => ({
			id: actor.did,
			label: actor.handle,
			avatar: actor.avatar,
			data: { displayName: actor.displayName }
		}));
	}
</script>

<div class={cn('relative', className)}>
	<CoreRichTextEditor
		bind:editor
		bind:ref
		{placeholder}
		extraExtensions={[
			MentionNode.configure({
				HTMLAttributes: {
					class: 'text-accent-600 dark:text-accent-400 font-medium'
				}
			}),
			HashtagDecoration
		]}
		onupdate={(c) => {
			content = editorJsonToBlueskyPost(c as JSONContent);
			onupdate?.(content);
		}}
	>
		{#if $editor}
			<MentionMenu editor={$editor} items={searchMentions}>
				{#snippet item({ item: mentionItem, isActive, select })}
					<button
						onclick={select}
						class={cn(
							'text-base-900 dark:text-base-200 flex min-w-48 w-full cursor-pointer items-center gap-3 px-3 py-2 font-medium',
							isActive
								? 'text-accent-700 dark:text-accent-400 bg-accent-500/10'
								: 'hover:bg-accent-500/10'
						)}
					>
						<Avatar src={mentionItem.avatar} alt="" class="size-6 rounded-full" />
						<span class="flex flex-col items-start">
							<span>{mentionItem.label}</span>
							{#if mentionItem.data?.displayName}
								<span class="text-base-500 text-xs">{mentionItem.data.displayName}</span>
							{/if}
						</span>
					</button>
				{/snippet}
			</MentionMenu>
		{/if}
	</CoreRichTextEditor>

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
