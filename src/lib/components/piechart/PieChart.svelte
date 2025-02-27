<script lang="ts">
	import { PieChart, Tooltip } from 'layerchart';

	let languages: { name: string; size: number }[] = [
		{
			name: 'Svelte',
			size: 40
		},
		{
			name: 'TypeScript',
			size: 30
		},
		{
			name: 'HTML',
			size: 20
		},
		{
			name: 'JavaScript',
			size: 10
		}
	];
</script>

<div class="h-80 w-full gap-2 overflow-auto">
	<PieChart
		data={languages}
		key="name"
		value="size"
		innerRadius={-20}
		cornerRadius={16}
		padAngle={0.025}
		series={[
			{ key: 0, color: 'hsl(var(--accent-800))' },
			{ key: 1, color: 'hsl(var(--accent-600))' },
			{ key: 2, color: 'hsl(var(--accent-400))' },
			{ key: 3, color: 'hsl(var(--accent-200))' }
		]}
	>
		<div slot="tooltip">
			<Tooltip.Root
				let:data
				class="rounded-2xl border border-base-300 bg-base-200/80 py-2 backdrop-blur-sm dark:border-base-800 dark:bg-base-900/80"
			>
				<Tooltip.Header class="border-b-0 text-xs font-medium text-accent-700 dark:text-accent-600"
					>{data?.name}</Tooltip.Header
				>
				<Tooltip.List>
					<Tooltip.Item
						label=""
						value={data?.size + ' %'}
						class="flex gap-2 font-bold text-accent-600 dark:text-accent-500"
					/>
				</Tooltip.List>
			</Tooltip.Root>
		</div>
	</PieChart>
</div>
