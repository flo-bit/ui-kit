<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '$lib';

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
		'text-base-800 dark:text-base-200 overflow-hidden pt-2 pb-4 text-sm transition-all',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Content>
