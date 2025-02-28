<script>
	import Subheading from "$lib/components/heading/Subheading.svelte";
	import LineGraph from "$lib/components/line-graph/LineGraph.svelte";

	const data = [
		{ x: new Date('2020-01-01'), value: 10 },
		{ x: new Date('2020-01-20'), value: 50 },
		{ x: new Date('2020-02-02'), value: 20 },
		{ x: new Date('2020-03-03'), value: 30 },
		{ x: new Date('2020-04-04'), value: 20 },
		{ x: new Date('2020-04-20'), value: 80 },
		{ x: new Date('2020-05-05'), value: 50 },
		{ x: new Date('2020-05-20'), value: 10 },
	];
</script>

<Subheading class="mb-6">Line Graph</Subheading>

<LineGraph data={data} />
