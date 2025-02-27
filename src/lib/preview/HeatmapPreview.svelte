<script lang="ts">
	import { Subheading } from '$lib/components/heading';
	import Heatmap from '$lib/components/heatmap/Heatmap.svelte';

	const heatmapData = Array.from({ length: 34 }, () =>
		Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
	) as (0 | 1 | 2 | 3 | 4)[][];
</script>

<Subheading class="mb-6">Heatmap</Subheading>

<Heatmap data={heatmapData} />
