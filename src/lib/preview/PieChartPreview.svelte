<script>
	import { Subheading } from '$lib/components/heading';
	import PieChart from '$lib/components/piechart/PieChart.svelte';
</script>

<Subheading class="mb-4">Pie Chart</Subheading>

<PieChart
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
/>
