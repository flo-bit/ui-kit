import CardHeatmap from '$docs/cards/graphs/CardHeatmap.svelte';
import CardLineGraph from '$docs/cards/graphs/CardLineGraph.svelte';
import CardRingChart from '$docs/cards/graphs/CardRingChart.svelte';

export const graphComponents = [
	{
		component: CardHeatmap,
		className: '',
		label: 'Heatmap',
		href: 'heatmap'
	},
	{
		component: CardLineGraph,
		className: '',
		label: 'Line Graph',
		href: 'line-graph'
	},
	{
		component: CardRingChart,
		className: '',
		label: 'Ring Chart',
		href: 'ring-chart'
	}
].sort((a, b) => a.label.localeCompare(b.label));
