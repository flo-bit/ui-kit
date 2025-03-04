<script lang="ts">
	import Heatmap from '$lib/components/charts/heatmap/Heatmap.svelte';

	const heatmapData = Array.from({ length: 30 }, () =>
		Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
	) as (0 | 1 | 2 | 3 | 4)[][];
</script>

<div class="w-full overflow-hidden">
	<Heatmap data={heatmapData} />
</div>
