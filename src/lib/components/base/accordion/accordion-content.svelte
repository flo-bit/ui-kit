<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	class={cn(
		'text-base-800 dark:text-base-200 pt-2 overflow-hidden text-sm transition-all pb-4',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Content>
