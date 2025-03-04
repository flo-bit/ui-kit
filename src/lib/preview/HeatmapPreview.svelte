<script lang="ts">
	import { Subheading } from '$lib/components/base/heading';
	import Heatmap from '$lib/components/charts/heatmap/Heatmap.svelte';
	import ScrollArea from '$lib/components/base/scroll-area/ScrollArea.svelte';

	const heatmapData = Array.from({ length: 40 }, () =>
		Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
	) as (0 | 1 | 2 | 3 | 4)[][];
</script>

<Subheading class="mb-6">Heatmap</Subheading>

<div class="max-w-full">
	<ScrollArea type="hover" class="w-full pb-2" orientation="horizontal">
		<Heatmap data={heatmapData} />
	</ScrollArea>
</div>
