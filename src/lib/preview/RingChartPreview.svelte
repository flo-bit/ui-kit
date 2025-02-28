<script>
	import { Subheading } from '$lib/components/heading';
	import RingChart from '$lib/components/ring-chart/RingChart.svelte';
</script>

<Subheading class="mb-4">Ring Chart</Subheading>

<RingChart
	height="h-64"
	thickness={20}
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
/>
