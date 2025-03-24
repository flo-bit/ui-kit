<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn } from '$lib';
	import AccordionContent from './accordion-content.svelte';
	import { AccordionTrigger } from '.';

	let {
		ref = $bindable(null),
		class: className,
		title,
		children,
		contentClasses,
		triggerClasses,
		...restProps
	}: AccordionPrimitive.ItemProps & {
		title?: string;
		contentClasses?: string;
		triggerClasses?: string;
	} = $props();
</script>

<AccordionPrimitive.Item
	bind:ref
	class={cn('border-base-200 dark:border-base-900 border-b', className)}
	{...restProps}
>
	{#if title}
		<AccordionTrigger class={triggerClasses}>{title}</AccordionTrigger>
		<AccordionContent class={contentClasses}>
			{@render children?.()}
		</AccordionContent>
	{:else}
		{@render children?.()}
	{/if}
</AccordionPrimitive.Item>
