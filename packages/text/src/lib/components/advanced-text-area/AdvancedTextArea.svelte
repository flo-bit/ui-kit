<script lang="ts">
	import { Button, ScrollArea } from '@fuxui/base';
	import type { Snippet } from 'svelte';

	let {
		value = $bindable(),
		placeholder = 'Write something here...',
		rows = 3,
		additionalContent = null,
		actionButtons = null,
		submitButton = 'Post',
		...restProps
	}: {
		value?: string;
		placeholder?: string;
		rows?: number;
		additionalContent?: Snippet | null;
		actionButtons?: Snippet | null;
		submitButton?: Snippet | string | null;
	} = $props();
</script>

<div class="relative min-w-0 flex-1">
	<div
		class="outline-base-300 focus-within:outline-accent-600 dark:focus-within:outline-accent-500 dark:bg-base-900/50 rounded-2xl bg-white outline-1 -outline-offset-1 focus-within:outline-2 focus-within:-outline-offset-2 dark:outline-white/10"
	>
		<ScrollArea>
			<textarea
				{rows}
				{placeholder}
				bind:value
				class="text-base-900 placeholder:text-base-500 dark:placeholder:text-base-400 block w-full resize-none border-none bg-transparent p-3 text-base outline-none focus:border-0 focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
				{...restProps}
			></textarea>
		</ScrollArea>

		{#if additionalContent}
			{@render additionalContent()}
		{/if}

		<div class="h-[50px]"></div>
	</div>

	<div class="absolute inset-x-0 bottom-0 flex justify-between p-2">
		<div class="flex items-center space-x-2">
			{#if actionButtons}
				{@render actionButtons()}
			{/if}
		</div>
		<div class="shrink-0">
			{#if typeof submitButton === 'string'}
				<Button type="submit" class="rounded-xl">{submitButton}</Button>
			{:else if submitButton}
				{@render submitButton()}
			{/if}
		</div>
	</div>
</div>
