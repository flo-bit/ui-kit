<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { StopwatchState } from './StopwatchState.svelte';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib';

	let {
		stopwatch = $bindable(),
		class: className,
		ref = $bindable(null),
		showHours = false,
		showMinutes = true,
		showSeconds = true,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		stopwatch?: StopwatchState;
		showHours?: boolean;
		showMinutes?: boolean;
		showSeconds?: boolean;
	} = $props();

	if (!stopwatch) {
		stopwatch = new StopwatchState();
	}

	const hh = $derived(Math.floor(stopwatch.elapsed / 3600000));
	const mm = $derived(Math.floor((stopwatch.elapsed % 3600000) / 60000));
	const ss = $derived(Math.floor((stopwatch.elapsed % 60000) / 1000));
</script>

<NumberFlowGroup>
	<div
		bind:this={ref}
		class={cn(
			'text-base-900 dark:text-base-100 flex w-full justify-center text-5xl font-bold',
			className
		)}
		style="font-variant-numeric: tabular-nums;"
		{...restProps}
	>
		{#if showHours}
			<NumberFlow value={hh} trend={1} format={{ minimumIntegerDigits: 2 }} />
		{/if}

		{#if showMinutes}
			<NumberFlow
				value={mm}
				trend={1}
				format={{ minimumIntegerDigits: 2 }}
				prefix={showHours ? ':' : ''}
				digits={{ 1: { max: 5 } }}
			/>
		{/if}

		{#if showSeconds}
			<NumberFlow
				value={ss}
				format={{ minimumIntegerDigits: 2 }}
				trend={1}
				prefix={showHours || showMinutes ? ':' : ''}
				digits={{ 1: { max: 5 } }}
			/>
		{/if}
	</div>
</NumberFlowGroup>
