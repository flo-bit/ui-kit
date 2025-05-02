<script>
	import { buttonVariants, Popover, cn } from '@fuxui/base';
	import SelectTheme from './SelectTheme.svelte';
</script>

<Popover>
	{#snippet child({ props })}
		<button {...props}
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
		</button>
	{/snippet}
	<!-- add class w-72? -->
	<SelectTheme showTitle={false} />
</Popover>