<script lang="ts">
	import { Label as LabelPrimitive } from 'bits-ui';
	import { cn } from '../../utils';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: LabelPrimitive.RootProps = $props();
</script>

<LabelPrimitive.Root
	bind:ref
	class={cn(
		'text-base-900 dark:text-base-50 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className
	)}
	{...restProps}
/>
