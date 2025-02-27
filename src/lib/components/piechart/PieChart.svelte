<script lang="ts">
	import { PieChart, Tooltip } from 'layerchart';
;

	const { data, ...restProps }: {
		data: {
			name: string;
			value: number;
		}[];
	} = $props();

	let colors = [
		{ key: 0, color: 'hsl(var(--accent-800))' },
		{ key: 1, color: 'hsl(var(--accent-600))' },
		{ key: 2, color: 'hsl(var(--accent-400))' },
		{ key: 3, color: 'hsl(var(--accent-200))' }
	];
</script>

<div class="flex items-center justify-between w-full gap-2 overflow-hidden">
	<div class="flex flex-col gap-2">
		{#each data as point, index}
			<div class="flex items-center justify-start gap-2">
				<div class="h-4 w-4 rounded-full" style="background-color: {colors[index].color}"></div>
				<span class="text-xs text-base-700 dark:text-base-300">{point.name}</span>
			</div>
		{/each}
	</div>
	<div class="h-44 grow">
		<PieChart
			{data}
			key="name"
			value="value"
			innerRadius={-15}
			cornerRadius={16}
			padAngle={0.05}
			series={colors}
		>
			<div slot="tooltip">
				<Tooltip.Root
					let:data
					class="rounded-2xl border border-base-300 bg-base-200/80 py-2 backdrop-blur-sm dark:border-base-800 dark:bg-base-900/80"
				>
					<Tooltip.Header
						class="border-b-0 text-xs font-medium text-accent-700 dark:text-accent-600"
						>{data?.name}</Tooltip.Header
					>
					<Tooltip.List>
						<Tooltip.Item
							label=""
							value={data?.value}
							class="flex gap-2 font-bold text-accent-600 dark:text-accent-500"
						/>
					</Tooltip.List>
				</Tooltip.Root>
			</div>
		</PieChart>
	</div>
</div>
