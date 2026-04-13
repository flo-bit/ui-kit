<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
	import { ChevronDown } from '@jis3r/icons';
	import { cn } from '../../utils';

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.TriggerProps> & {
		level?: AccordionPrimitive.HeaderProps['level'];
	} = $props();
</script>

<AccordionPrimitive.Header {level} class="flex w-full">
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			'focus-visible:outline-base-900 dark:focus-visible:outline-base-50 text-base-950 dark:text-base-50 hover:text-accent-600 dark:hover:text-accent-400 my-2 flex w-full flex-1 cursor-pointer items-center justify-between gap-2 rounded-ui py-2 font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 [&[data-state=open]_.accordion-chevron]:rotate-180',
			className
		)}
		{...restProps}
	>
		{@render children?.()}

		<ChevronDown size={16} class="accordion-chevron shrink-0 transition-transform duration-200" />
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
