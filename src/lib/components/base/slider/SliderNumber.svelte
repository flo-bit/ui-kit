<script lang="ts">
	import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { Slider } from '.';
	import NumberFlow from '@number-flow/svelte';

	let {
		ref = $bindable(null),
		value = $bindable(),
		orientation = 'horizontal',
		class: className,
		tabindex = undefined,
		type = 'single',
		min = 0,
		max = 100
	}: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<div class="flex items-center gap-6">
	<Slider
		bind:value={value as never}
		bind:ref
		{orientation}
		class={className}
		{tabindex}
		{type}
		{min}
		{max}
	/>

	<NumberFlow
		{value}
		locales="en-US"
		format={{ useGrouping: false }}
		aria-hidden="true"
		class="text-base-900 dark:text-base-100 pointer-events-none min-w-6 text-right text-lg font-semibold"
		willChange
	/>
</div>
