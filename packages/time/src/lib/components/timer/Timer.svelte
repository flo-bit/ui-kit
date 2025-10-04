<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { TimerState } from './TimerState.svelte';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '@foxui/core';

	let {
		timer = $bindable(),
		class: className,
		ref = $bindable(null),
		showHours = false,
		showMinutes = true,
		showSeconds = true,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		timer?: TimerState;
		showHours?: boolean;
		showMinutes?: boolean;
		showSeconds?: boolean;
	} = $props();

	if (!timer) {
		timer = new TimerState(1000 * 60 * 10);
	}

	const hh = $derived(Math.floor(timer.remaining / 3600000));
	const mm = $derived(Math.floor((timer.remaining % 3600000) / 60000));
	const ss = $derived(Math.floor((timer.remaining % 60000) / 1000));
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
			<NumberFlow value={hh} trend={-1} format={{ minimumIntegerDigits: 2 }} />
		{/if}

		{#if showMinutes}
			<NumberFlow
				value={mm}
				trend={-1}
				format={{ minimumIntegerDigits: 2 }}
				prefix={showHours ? ':' : ''}
				digits={{ 1: { max: 5 } }}
			/>
		{/if}

		{#if showSeconds}
			<NumberFlow
				value={ss}
				format={{ minimumIntegerDigits: 2 }}
				trend={-1}
				prefix={showHours || showMinutes ? ':' : ''}
				digits={{ 1: { max: 5 } }}
			/>
		{/if}
	</div>
</NumberFlowGroup>
