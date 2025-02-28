<script lang="ts">
	import { PieChart, Tooltip } from 'layerchart';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from 'bits-ui';
	import { cn } from '$lib/utils';

	const defaultColors = [
		{ key: 0, color: 'var(--color-accent-800)' },
		{ key: 1, color: 'var(--color-accent-600)' },
		{ key: 2, color: 'var(--color-accent-400)' },
		{ key: 3, color: 'var(--color-accent-200)' }
	];

	const defaultValueTransform = (value: number) => value + ' %';

	let {
		ref = $bindable(null),
		data,
		colors = defaultColors,
		class: className,
		showLegend = true,
		pieChartClasses,
		height = 'h-44',
		thickness = 15,
		cornerRadius = 16,
		padAngle = 0.05,
		valueTransform = defaultValueTransform,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		data: {
			name: string;
			value: number;
		}[];

		colors?: {
			key: number;
			color: string;
		}[];

		showLegend?: boolean;

		pieChartClasses?: string;

		valueTransform?: (value: number) => string;

		height?: string;

		thickness?: number;
		cornerRadius?: number;
		padAngle?: number;
	} = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'flex w-full items-center gap-2 overflow-hidden',
		showLegend ? 'justify-between' : 'justify-center',
		className
	)}
	{...restProps}
>
	{#if showLegend}
		<div class="flex flex-col gap-2">
			{#each data.sort((a, b) => b.value - a.value) as point, index}
				<div class="flex items-center justify-start gap-1.5">
					<div class="h-4 w-4 rounded-full" style="background-color: {colors[index].color}"></div>
					<span class="text-base-700 dark:text-base-300 text-xs font-bold"
						>{valueTransform(point.value)}</span
					>
					<span class="text-base-700 dark:text-base-300 text-xs">{point.name}</span>
				</div>
			{/each}
		</div>
	{/if}
	<div class={cn('grow', height, pieChartClasses)}>
		<PieChart
			{data}
			key="name"
			value="value"
			innerRadius={-thickness}
			cornerRadius={cornerRadius}
			padAngle={padAngle}
			series={colors}
		>
			<div slot="tooltip">
				<Tooltip.Root
					let:data
					class="border-base-300 bg-base-200/80 dark:border-base-800 dark:bg-base-900/80 rounded-2xl border py-2 backdrop-blur-xs"
				>
					<Tooltip.Header
						class="text-accent-700 dark:text-accent-600 border-b-0 text-xs font-medium"
						>{data?.name}</Tooltip.Header
					>
					<Tooltip.List>
						<Tooltip.Item
							label=""
							value={valueTransform(data?.value)}
							class="text-accent-600 dark:text-accent-500 flex gap-2 font-bold"
						/>
					</Tooltip.List>
				</Tooltip.Root>
			</div>
		</PieChart>
	</div>
</div>
