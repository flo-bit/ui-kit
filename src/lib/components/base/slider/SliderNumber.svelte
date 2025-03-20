<script lang="ts">
	import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { Slider } from '.';
	import { cn } from '$lib/utils';
	import NumberFlow from '@number-flow/svelte';

	let {
		ref = $bindable(null),
		value = $bindable(),
		orientation = 'horizontal',
		class: className,
		tabindex = undefined,
		type = 'single'
	}: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<div class="flex items-center gap-6">
	<Slider bind:value bind:ref {orientation} class={className} {tabindex} {type} />

	<NumberFlow
		{value}
		locales="en-US"
		format={{ useGrouping: false }}
		aria-hidden="true"
		class="pointer-events-none min-w-6 text-right text-lg font-semibold text-base-900 dark:text-base-100"
		willChange
	/>
</div>
