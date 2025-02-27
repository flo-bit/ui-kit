<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLBaseAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		level = 2,
		children,
		...restProps
	}: WithElementRef<HTMLBaseAttributes> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	} = $props();
</script>

<svelte:element
	this={'h' + level}
	bind:this={ref}
	class={['text-base font-semibold text-base-900 dark:text-base-50 sm:text-lg', className]}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
