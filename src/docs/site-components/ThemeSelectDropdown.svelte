<script>
	import { buttonVariants } from '$lib/components/base/button';
	import * as Popover from '$lib/components/base/popover';
	import SelectTheme from './SelectTheme.svelte';
	import { cn } from '$lib';
</script>

<Popover.Root>
	<Popover.Trigger
		class={cn(
			buttonVariants({ variant: 'link', size: 'default' }),
			'flex cursor-pointer items-center gap-0 -space-x-2'
		)}
	>
		<div
			class=" from-accent-500 to-accent-600 border-accent-700 dark:border-accent-400 z-10 size-6 rounded-full border bg-gradient-to-b"
		></div>

		<div
			class=" from-base-500 to-base-600 border-base-700 dark:border-base-400 size-6 rounded-full border bg-gradient-to-b"
		></div>
	</Popover.Trigger>
	<Popover.Content class="w-72">
		<SelectTheme showTitle={false} />
	</Popover.Content>
</Popover.Root>
