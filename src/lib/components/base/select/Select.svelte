<script lang="ts">
	import { Toolbar, type WithoutChildrenOrChild } from 'bits-ui';
	import { cn } from '$lib';

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

	if (!selected) {
		selected = typeof items[0] === 'string' ? items[0] : items[0].value;
	}
</script>

<Toolbar.Root bind:ref class={className} {...restProps}>
	<Toolbar.Group bind:value={selected} type="single" class="flex items-center gap-x-1 text-sm">
		{#each items as item}
			<Toolbar.GroupItem
				aria-label="align left"
				value={typeof item === 'string' ? item : item.value}
				class={[
					'inline-flex cursor-pointer items-center justify-center rounded-2xl p-1 px-2 transition-all',
					'text-base-600 hover:text-accent-600 dark:text-base-300 dark:hover:text-accent-400 outline-accent-300',
					'dark:outline-accent-500/30 data-[state=on]:text-accent-600 dark:data-[state=on]:text-accent-400',
					'dark:data-[state=on]:bg-accent-700/10 data-[state=on]:bg-accent-500/10 data-[state=on]:outline'
				]}
			>
				{typeof item === 'string' ? item : item.label}
			</Toolbar.GroupItem>
		{/each}
	</Toolbar.Group>
</Toolbar.Root>
