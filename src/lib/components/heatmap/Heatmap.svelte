<script lang="ts">
	let colors = [
		'bg-accent-200/50 dark:bg-accent-950/30',
		'bg-accent-300/50 dark:bg-accent-800/70',
		'bg-accent-400/80 dark:bg-accent-700',
		'bg-accent-500/80 dark:bg-accent-600',
		'bg-accent-600 dark:bg-accent-500'
	];

	const {
		data
	}: {
		data: (0 | 1 | 2 | 3 | 4)[][];
	} = $props();
</script>

<div class="flex max-w-full gap-0.5 sm:gap-1">
	{#each data as week}
		<div class="flex w-full flex-col gap-0.5 sm:gap-1">
			{#each week as day}
				<div class="size-2 rounded-sm sm:size-3 {colors[day]}"></div>
			{/each}
		</div>
	{/each}
</div>
