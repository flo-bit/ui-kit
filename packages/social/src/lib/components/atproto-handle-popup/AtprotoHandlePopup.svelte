<script lang="ts">
	import { Command } from 'bits-ui';
	import { searchActorsTypeahead, type Profile } from './helper';
	import { Avatar, cn, inputVariants } from '@foxui/core';

	let results: Profile[] = $state([]);
	let inputValue = $state('');

	async function search(q: string) {
		if (!q || q.length < 2) {
			results = [];
			return;
		}
		results = (await searchActorsTypeahead(q, 5)).actors;
	}

	function select(actor: Profile) {
		results = [];
		inputValue = '';
		value = actor.handle;
		onselected?.(actor);
	}

	let {
		value = $bindable(),
		onselected,
		ref = $bindable(null)
	}: {
		value?: string;
		onselected?: (actor: Profile) => void;
		ref?: HTMLInputElement | null;
	} = $props();
</script>

<div class="relative w-full">
	<Command.Root shouldFilter={false} class="w-full">
		<Command.Input
			bind:ref
			bind:value={inputValue}
			oninput={() => search(inputValue)}
			onkeydown={(e) => {
				if (e.key === 'Enter' && results.length === 0 && inputValue) {
					e.preventDefault();
					select({ handle: inputValue, displayName: '', avatar: '', did: '' });
				}
			}}
			class={cn(inputVariants(), 'w-full')}
			placeholder="handle"
			aria-label="enter your handle"
		/>
		{#if results.length > 0}
			<Command.List
				class="border-base-300 bg-base-50 dark:bg-base-800 dark:border-base-700 absolute z-100 mt-2.5 max-h-[30dvh] w-full overflow-y-auto rounded-2xl border p-1 shadow-lg"
			>
				{#each results as actor (actor.did)}
					<Command.Item
						value={actor.handle}
						onSelect={() => select(actor)}
						class="data-selected:bg-accent-100 dark:data-selected:bg-accent-600/30 my-0.5 flex w-full cursor-pointer items-center gap-2 rounded-xl p-2 px-2"
					>
						<Avatar src={actor.avatar} alt="" class="size-6 rounded-full" />
						{actor.handle}
					</Command.Item>
				{/each}
			</Command.List>
		{/if}
	</Command.Root>
</div>
