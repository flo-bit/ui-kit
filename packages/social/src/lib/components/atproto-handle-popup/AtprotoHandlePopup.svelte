<script lang="ts">
	import { Command } from 'bits-ui';
	import { searchActorsTypeahead, type Profile } from './helper';
	import { Avatar, cn, inputVariants } from '@foxui/core';

	let results: Profile[] = $state([]);

	let {
		value = $bindable(''),
		onselected,
		ref = $bindable(null),
		host = 'https://public.api.bsky.app',
		search: customSearch,
		limit = 5
	}: {
		value?: string;
		onselected?: (actor: Profile) => void;
		ref?: HTMLInputElement | null;
		/** Base URL of the AppView used for handle lookup. */
		host?: string;
		/** Custom search override. Receives the query and limit; returns matching profiles. */
		search?: (q: string, limit: number) => Promise<Profile[]>;
		limit?: number;
	} = $props();

	async function search(q: string) {
		if (!q || q.length < 2) {
			results = [];
			return;
		}
		if (customSearch) {
			results = await customSearch(q, limit);
		} else {
			results = (await searchActorsTypeahead(q, limit, host)).actors;
		}
	}

	function select(actor: Profile) {
		results = [];
		value = actor.handle;
		onselected?.(actor);
	}
</script>

<div class="relative w-full">
	<Command.Root shouldFilter={false} class="w-full">
		<Command.Input
			bind:ref
			bind:value
			oninput={() => search(value)}
			onblur={() => {
				results = [];
			}}
			onkeydown={(e) => {
				if (e.key === 'Enter' && results.length === 0 && value) {
					e.preventDefault();
					select({ handle: value, displayName: '', avatar: '', did: '' });
				}
			}}
			class={cn(inputVariants(), 'w-full')}
			placeholder="handle"
			aria-label="enter your handle"
			type="search"
			name="atproto-handle"
			autocomplete="off"
			autocorrect="off"
			autocapitalize="none"
			spellcheck="false"
			data-1p-ignore
			data-lpignore="true"
			data-bwignore
			data-form-type="other"
		/>
		{#if results.length > 0}
			<Command.List
				onpointerdown={(e) => e.preventDefault()}
				class="border-base-300 bg-base-50 dark:bg-base-800 dark:border-base-700 absolute z-100 mt-2.5 max-h-[30dvh] w-full overflow-y-auto rounded-ui border p-1 shadow-lg"
			>
				{#each results as actor (actor.did)}
					<Command.Item
						value={actor.handle}
						onSelect={() => select(actor)}
						class="data-selected:bg-accent-100 dark:data-selected:bg-accent-600/30 my-0.5 flex w-full cursor-pointer items-center gap-2 rounded-ui-sm p-2 px-2"
					>
						<Avatar src={actor.avatar} alt="" class="size-6 rounded-full" />
						{actor.handle}
					</Command.Item>
				{/each}
			</Command.List>
		{/if}
	</Command.Root>
</div>
