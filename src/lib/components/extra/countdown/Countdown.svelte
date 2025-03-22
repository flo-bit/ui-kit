<script lang="ts">
	import NumberFlow, { NumberFlowGroup } from '@number-flow/svelte';
	import { TimerState } from '$lib';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

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
		timer = new TimerState(1000 * 5);
	}

	const ss = $derived(Math.floor(timer.remaining / 1000));
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

		{#if showSeconds}
			<NumberFlow
				value={ss}
				trend={-1}
				digits={{ 1: { max: 5 } }}
			/>
		{/if}
	</div>
</NumberFlowGroup>
