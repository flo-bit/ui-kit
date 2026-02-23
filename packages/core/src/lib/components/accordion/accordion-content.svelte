<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
	import { cn } from '../../utils';

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
		'motion-safe:data-[state=closed]:animate-[accordion-up_200ms_ease-out_forwards] motion-safe:data-[state=open]:animate-[accordion-down_200ms_ease-out_forwards]',
		'text-base-800 dark:text-base-200 overflow-hidden text-sm',
		className
	)}
	{...restProps}
>
<div class="pb-2">
	{@render children?.()}
	</div>
</AccordionPrimitive.Content>

<style>
	@keyframes -global-accordion-down {
		from {
			height: 0;
		}
		to {
			height: var(--bits-accordion-content-height);
		}
	}

	@keyframes -global-accordion-up {
		from {
			height: var(--bits-accordion-content-height);
		}
		to {
			height: 0;
		}
	}
</style>
