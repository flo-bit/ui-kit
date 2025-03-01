<script lang="ts">
	import NumberFlow from '@number-flow/svelte';
	import { onMount } from 'svelte';

	let {
		stats
	}: {
		stats: {
			label: string;
			value: number;
		}[];
	} = $props();

	let started = $state(false);

	onMount(() => {
		started = true;
	});
</script>

<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
	{#each stats as stat}
		<div class="mx-auto flex max-w-xs flex-col gap-y-2">
			<dt class="text-base-600 dark:text-base-400 text-base">{stat.label}</dt>
			<dd
				class="text-base-900 dark:text-base-100 order-first text-5xl font-bold tracking-tight sm:text-7xl"
			>
				<NumberFlow value={started ? stat.value : 0} />
			</dd>
		</div>
	{/each}
</dl>
