<script>
	import Stats from '$lib/sections/stats/Stats.svelte';
</script>

<div class="h-screen w-screen flex items-center justify-center">
	<div class="w-full max-w-5xl">
	<Stats
		stats={[
			{
				label: 'Lines of code',
				value: 23
			},
			{
				label: 'Commits',
				value: 123
			},
			{
				label: 'Failed deployments',
				value: 7294
			}
		]}
	/>
</div>

</div>
