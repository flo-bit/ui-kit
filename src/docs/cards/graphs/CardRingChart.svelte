<script>
	import RingChart from '$lib/components/charts/ring-chart/RingChart.svelte';
</script>

<RingChart
	height="h-30"
	thickness={10}
	data={[
		{
			name: 'Svelte',
			value: 40
		},
		{
			name: 'TypeScript',
			value: 30
		},
		{
			name: 'HTML',
			value: 20
		},
		{
			name: 'JavaScript',
			value: 10
		}
	]}
	colors={[
		{ key: 0, color: 'var(--accent-800)' },
		{ key: 1, color: 'var(--accent-600)' },
		{ key: 2, color: 'var(--accent-400)' },
		{ key: 3, color: 'var(--accent-200)' }
	]}
	showLegend={false}
/>
