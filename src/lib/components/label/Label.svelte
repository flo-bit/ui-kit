<script lang="ts">
	import { Label as LabelPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: LabelPrimitive.RootProps = $props();
</script>

<LabelPrimitive.Root
	bind:ref
	class={[
		'text-sm font-medium leading-none text-base-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-base-50',
		className
	]}
	{...restProps}
/>
