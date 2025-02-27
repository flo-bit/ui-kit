<script lang="ts">
	let colors = [
		'bg-accent-950/30',
		'bg-accent-800/70',
		'bg-accent-700',
		'bg-accent-600',
		'bg-accent-500'
	];

	const {
		data
	}: {
		data: (0 | 1 | 2 | 3 | 4)[][];
	} = $props();
</script>

<div class="flex max-w-full gap-0.5 overflow-scroll sm:gap-1">
	{#each data as week}
		<div class="flex w-full flex-col gap-0.5 sm:gap-1">
			{#each week as day}
				<div class="size-2 rounded-sm sm:size-3 {colors[day]}"></div>
			{/each}
		</div>
	{/each}
</div>
