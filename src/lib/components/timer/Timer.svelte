<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { TimerState } from './TimerState.svelte';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	let {
		timer = $bindable(new TimerState(1000 * 60 * 60)),
		class: className,
		ref = $bindable(null),
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		timer?: TimerState;
	} = $props();

	const hh = $derived(Math.floor(timer.remaining / 3600000));
	const mm = $derived(Math.floor((timer.remaining % 3600000) / 60000));
	const ss = $derived(Math.floor((timer.remaining % 60000) / 1000));
</script>

<NumberFlowGroup>
	<div
		bind:this={ref}
		class={cn(
			'text-base-900 dark:text-base-100 flex w-full justify-center text-5xl font-bold sm:text-7xl',
			className
		)}
		style="font-variant-numeric: tabular-nums;"
		{...restProps}
	>
		<NumberFlow value={hh} trend={-1} format={{ minimumIntegerDigits: 2 }} />

		<NumberFlow
			value={mm}
			trend={-1}
			format={{ minimumIntegerDigits: 2 }}
			prefix=":"
			digits={{ 1: { max: 5 } }}
		/>
		<NumberFlow
			value={ss}
			format={{ minimumIntegerDigits: 2 }}
			trend={-1}
			prefix=":"
			digits={{ 1: { max: 5 } }}
		/>
	</div>
</NumberFlowGroup>
