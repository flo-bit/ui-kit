<script lang="ts">
	import { Switch as SwitchPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	class={cn(
		'data-[state=checked]:bg-accent-500/30 dark:data-[state=checked]:bg-accent-500/20 data-[state=checked]:border-accent-500/30 data-[state=unchecked]:bg-base-500/20 data-[state=unchecked]:border-base-400/30 peer focus-visible:outline-base-900 dark:focus-visible:outline-base-100 inline-flex h-6 w-10.5 shrink-0 cursor-pointer items-center rounded-full border transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100',
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		class={cn(
			'bg-base-500 data-[state=checked]:bg-accent-600 dark:bg-base-600 dark:data-[state=checked]:bg-accent-500 pointer-events-none block size-5 rounded-full shadow-lg ring-0 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 motion-safe:transition-transform'
		)}
	/>
</SwitchPrimitive.Root>
