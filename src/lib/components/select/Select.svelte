<script lang="ts">
	import { Toolbar, type WithoutChildrenOrChild } from 'bits-ui';
	import { cn } from '$lib/utils';

	type Item =
		| {
				label: string;
				value: string;
		  }
		| string;

	let {
		ref = $bindable(null),

		class: className,
		items = $bindable([]),
		selected = $bindable(),

		...restProps
	}: WithoutChildrenOrChild<Toolbar.RootProps> & {
		selected?: string;
		items: Item[];
	} = $props();
</script>

<Toolbar.Root
	bind:ref
	class={cn(
		'rounded-full border-accent-600/10 bg-accent-700/5 dark:border-accent-600/10 dark:bg-accent-700/5 flex gap-4 min-w-max items-center justify-center border',
		className
	)}
	{...restProps}
>
	<Toolbar.Group bind:value={selected} type="single" class="flex items-center gap-x-1">
		{#each items as item}
			<Toolbar.GroupItem
				aria-label="align left"
				value={typeof item === 'string' ? item : item.value}
				class="cursor-pointer rounded-2xl p-1 text-accent-700 hover:text-accent-600 dark:text-accent-300/70 dark:hover:text-accent-400 px-2 data-[state=on]:outline outline-accent-400 dark:outline-accent-900 data-[state=on]:text-accent-600 dark:data-[state=on]:text-accent-400 dark:data-[state=on]:bg-accent-700/10 data-[state=on]:bg-accent-500/10 inline-flex items-center justify-center transition-all"
			>
				{typeof item === 'string' ? item : item.label}
			</Toolbar.GroupItem>
		{/each}
	</Toolbar.Group>
</Toolbar.Root>
