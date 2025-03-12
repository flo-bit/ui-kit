<script>
	import LineGraph from '$lib/components/charts/line-graph/LineGraph.svelte';

	const data = [
		{ x: new Date('2020-01-01'), value: 10 },
		{ x: new Date('2020-01-20'), value: 40 },
		{ x: new Date('2020-02-02'), value: 20 },
		{ x: new Date('2020-03-03'), value: 30 },
		{ x: new Date('2020-04-04'), value: 20 },
		{ x: new Date('2020-04-20'), value: 30 },
		{ x: new Date('2020-05-05'), value: 60 },
		{ x: new Date('2020-05-20'), value: 50 }
	];
</script>

<LineGraph {data} class="h-36" showXAxis={false} showYAxis={false} />
