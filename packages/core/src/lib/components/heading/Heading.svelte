<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLBaseAttributes } from 'svelte/elements';
	import { cn } from '../../utils';

	let {
		ref = $bindable(null),
		class: className,
		level = 1,
		children,
		...restProps
	}: WithElementRef<HTMLBaseAttributes> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	} = $props();
</script>

<svelte:element
	this={'h' + level}
	bind:this={ref}
	class={cn('text-base-900 dark:text-base-50 text-2xl font-semibold', className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
