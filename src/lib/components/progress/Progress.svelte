<script lang="ts">
	import { Progress as ProgressPrimitive, type WithoutChildrenOrChild } from 'bits-ui';

	import type { HTMLAttributes } from 'svelte/elements';
	import { Progress } from 'bits-ui';

	let {
		ref = $bindable(null),
		progress = $bindable(0),
		value = $bindable(0),
		max = $bindable(100),

		class: className,
		backgroundClass,
		progressClass,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
		progress?: number;

		backgroundClass?: string;

		value?: number;
		max?: number;

		progressClass?: string;
	} = $props();
</script>

<ProgressPrimitive.Root
	bind:ref
	class={[
		'relative h-2 w-full overflow-hidden rounded-2xl bg-base-100 dark:bg-base-900',
		className
	]}
	{value}
	{max}
	{...restProps}
>
	<div
		class={[
			'absolute h-full w-full rounded-2xl border border-base-300 dark:border-base-800',
			backgroundClass
		]}
	></div>

	<div
		class={[
			'absolute h-full w-full rounded-2xl border-accent-600/50 bg-accent-500/50 transition-all duration-300 ease-in-out dark:border-accent-600/50 dark:bg-accent-900/70',
			progress > 0 ? 'border' : '',
			progressClass
		]}
		style="width: {Math.min(progress / max * 100, 100)}%"
	></div>
</ProgressPrimitive.Root>
