<script lang="ts">
	import { Chart, Svg, Axis, Spline, Tooltip, Highlight } from 'layerchart';
	// @ts-ignore
	import { curveCatmullRom } from 'd3-shape';
	// @ts-ignore
	import { scaleTime } from 'd3-scale';
	import { formatDate, PeriodType } from '@layerstack/utils';
	import { format } from 'date-fns';

	const defaultValueFormat = (value: any) => {
		return formatDate(value, PeriodType.Month, { variant: 'short' });
	};

	let { data } = $props();
</script>

<div class="h-44 w-full overflow-visible p-4 line-graph-container">
	<Chart
		{data}
		xScale={scaleTime()}
		x="x"
		y="value"
		yDomain={[0, null]}
		yNice
		tooltip={{ mode: 'bisect-x' }}
	>
		<Svg>
			<Axis
				placement="left"
				grid={{ class: 'stroke-accent-700/10' }}
				tickLabelProps={{
					rotate: 315,
					textAnchor: 'end',
					class: 'fill-accent-700 dark:fill-accent-600 font-medium text-xs'
				}}
				ticks={4}
				classes={{
					tickLabel: 'pl-4'
				}}
			/>

			<Axis
				placement="bottom"
				tickLabelProps={{
					class: 'fill-accent-700 dark:fill-accent-600 font-medium text-xs'
				}}
				rule
				format={defaultValueFormat}
				ticks={Math.min(data.length, 10)}
			/>
			<Spline
				class="stroke-accent-500 fill-transparent stroke-4 [stroke-linecap:round]"
				curve={curveCatmullRom}
			/>
			<Highlight
				lines
				points={{
					class:
						'fill-transparent outline-accent-700 dark:outline-accent-200 outline-4 rounded-full'
				}}
			/>
		</Svg>

		<Tooltip.Root
			let:data
			class="border-base-300 bg-base-200/80 dark:border-base-800 dark:bg-base-900/80 rounded-2xl border py-2 backdrop-blur-xs"
		>
			<Tooltip.Header class="text-accent-600 border-b-0 text-xs font-medium"
				>{format(data.x, 'MMMM do')}</Tooltip.Header
			>
			<Tooltip.List>
				<Tooltip.Item label="" value={data.value} class="text-accent-500 flex gap-2 font-bold" />
			</Tooltip.List>
		</Tooltip.Root>
	</Chart>
</div>


<noscript>
	<div
		class="border-base-200 bg-base-100 text-base-700 dark:border-base-700 dark:bg-base-900 dark:text-base-300 w-full rounded-2xl border p-4 text-sm"
	>
		JavaScript is required to view this content.
	</div>

	<style>
		.line-graph-container {
			display: none;
		}
	</style>
</noscript>