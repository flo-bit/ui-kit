<script>
	import { base } from '$app/paths';
	import { cn } from '$lib/utils';

	import CardGithubCorner from '$docs/cards/base/CardGithubCorner.svelte';
	import CardHeatmap from '$docs/cards/graphs/CardHeatmap.svelte';
	import CardLineGraph from '$docs/cards/graphs/CardLineGraph.svelte';
	import CardRingChart from '$docs/cards/graphs/CardRingChart.svelte';
	import { baseComponents } from './components_base';
	import { extraComponents } from './components_extra';

	let graphCards = [
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
	];

	// sort graphCards by label
	graphCards.sort((a, b) => a.label.localeCompare(b.label));

	let socialCards = [
		{
			component: CardGithubCorner,
			className: '',
			label: 'Github Corner',
			href: 'github-corner'
		}
	];
</script>

<h2 class="text-base-800 dark:text-base-200 mb-4 text-xl font-semibold">Base components</h2>
<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
	{#each baseComponents as card}
		<div
			class="group relative flex flex-col items-start gap-3 transition-opacity duration-150 hover:opacity-90 md:gap-4"
		>
			<div
				class="bg-base-100 dark:bg-base-900/30 border-base-200 dark:border-base-900 pointer-events-none relative h-44 w-full overflow-hidden rounded-2xl border"
			>
				<div
					class={cn(
						'absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 will-change-transform group-hover:scale-103',
						card.className
					)}
					aria-hidden="true"
					tabindex="-1"
				>
					<card.component />
				</div>
			</div>
			<a
				href={base + `/components/base/${card.href}`}
				class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				<span class="text-base-900 dark:text-base-50 mx-2 text-sm font-semibold">{card.label}</span>
				<span class="absolute inset-0"></span>
			</a>
		</div>
	{/each}
</div>


<h2 class="text-base-800 dark:text-base-200 mb-4 text-xl font-semibold mt-24">Extra components</h2>
<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
	{#each extraComponents as card}
		<div
			class="group relative flex flex-col items-start gap-3 transition-opacity duration-150 hover:opacity-90 md:gap-4"
		>
			<div
				class="bg-base-100 dark:bg-base-900/30 border-base-200 dark:border-base-900 pointer-events-none relative h-44 w-full overflow-hidden rounded-2xl border"
			>
				<div
					class={cn(
						'absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 will-change-transform group-hover:scale-103',
						card.className
					)}
					aria-hidden="true"
					tabindex="-1"
				>
					<card.component />
				</div>
			</div>
			<a
				href={base + `/components/extras/${card.href}`}
				class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				<span class="text-base-900 dark:text-base-50 mx-2 text-sm font-semibold">{card.label}</span>
				<span class="absolute inset-0"></span>
			</a>
		</div>
	{/each}
</div>


<!-- 
<h2 class="text-base-800 dark:text-base-200 mt-24 mb-4 text-xl font-semibold">Graph components</h2>
<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
	{#each graphCards as card}
		<div
			class="group relative flex flex-col items-start gap-3 transition-opacity duration-150 hover:opacity-90 md:gap-4"
		>
			<div
				class="bg-base-100 dark:bg-base-900/30 border-base-200 dark:border-base-900 pointer-events-none relative h-44 w-full overflow-hidden rounded-2xl border"
			>
				<div
					class={cn(
						'absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 will-change-transform group-hover:scale-103',
						card.className
					)}
					aria-hidden="true"
					tabindex="-1"
				>
					<card.component />
				</div>
			</div>
			<a
				href={base + `/components/graphs/${card.href}`}
				class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				<span class="text-base-900 dark:text-base-50 mx-2 text-sm font-semibold">{card.label}</span>
				<span class="absolute inset-0"></span>
			</a>
		</div>
	{/each}
</div> -->
