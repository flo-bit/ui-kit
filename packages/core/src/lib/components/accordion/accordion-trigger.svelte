<script lang="ts">
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
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
			'focus-visible:outline-base-900 dark:focus-visible:outline-base-50 text-base-950 dark:text-base-50 hover:text-accent-600 dark:hover:text-accent-400 my-2 flex w-full flex-1 cursor-pointer items-center justify-between gap-2 rounded-2xl py-2 font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 [&[data-state=open]>svg]:rotate-180',
			className
		)}
		{...restProps}
	>
		{@render children?.()}

		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="size-4 shrink-0 transition-transform duration-200"
		>
			<path
				fill-rule="evenodd"
				d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
				clip-rule="evenodd"
			/>
		</svg>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
