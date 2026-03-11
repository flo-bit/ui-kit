<script lang="ts">
	import {
		CoreRichTextEditor,
		MentionNode,
		MentionMenu,
		type MentionItem,
		type SvelteTiptap
	} from '@foxui/all';
	import { Avatar, cn, Box } from '@foxui/all';
	import type { Readable } from 'svelte/store';

	let editor = $state<Readable<SvelteTiptap.Editor>>();

	async function searchBlueskyUsers(query: string): Promise<MentionItem[]> {
		const res = await fetch(
			`https://public.api.bsky.app/xrpc/app.bsky.actor.searchActorsTypeahead?q=${query}&limit=5`
		);
		if (!res.ok) return [];
		const data = await res.json();
		return data.actors.map(
			(actor: { did: string; handle: string; avatar?: string; displayName?: string }) => ({
				id: actor.did,
				label: actor.handle,
				avatar: actor.avatar,
				data: { displayName: actor.displayName }
			})
		);
	}
</script>

<Box class="not-prose">
	<CoreRichTextEditor
		bind:editor
		placeholder="Type @ to mention someone..."
		extraExtensions={[
			MentionNode.configure({
				HTMLAttributes: { class: 'text-accent-600 dark:text-accent-400 font-medium' }
			})
		]}
		class="min-h-24"
	>
		{#if $editor}
			<MentionMenu editor={$editor} items={searchBlueskyUsers}>
				{#snippet item({ item: mentionItem, isActive, select })}
					<button
						onclick={select}
						class={cn(
							'text-base-900 dark:text-base-200 flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-sm',
							isActive
								? 'text-accent-700 dark:text-accent-400 bg-accent-500/10'
								: 'hover:bg-accent-500/10'
						)}
					>
						<Avatar src={mentionItem.avatar} alt="" class="size-6 rounded-full" />
						<span class="flex flex-col items-start">
							<span class="font-medium">{mentionItem.label}</span>
							{#if mentionItem.data?.displayName}
								<span class="text-base-500 text-xs">{mentionItem.data.displayName}</span>
							{/if}
						</span>
					</button>
				{/snippet}
			</MentionMenu>
		{/if}
	</CoreRichTextEditor>
</Box>
