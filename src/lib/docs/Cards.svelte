<script>
	import { base } from '$app/paths';
	import CardAlerts from '$lib/cards/CardAlerts.svelte';
	import CardAvatar from '$lib/cards/CardAvatar.svelte';
	import CardBadge from '$lib/cards/CardBadge.svelte';
	import CardBox from '$lib/cards/CardBox.svelte';
	import CardButtons from '$lib/cards/CardButtons.svelte';
	import CardCard from '$lib/cards/CardCard.svelte';
	import CardChatBubble from '$lib/cards/CardChatBubble.svelte';
	import CardCheckbox from '$lib/cards/CardCheckbox.svelte';
	import CardGithubCorner from '$lib/cards/CardGithubCorner.svelte';
	import CardHead from '$lib/cards/CardHead.svelte';
	import CardImage from '$lib/cards/CardImage.svelte';
	import CardInput from '$lib/cards/CardInput.svelte';
	import CardModal from '$lib/cards/CardModal.svelte';
	import CardNumberInput from '$lib/cards/CardNumberInput.svelte';
	import CardScrollArea from '$lib/cards/CardScrollArea.svelte';
	import CardSlider from '$lib/cards/CardSlider.svelte';
	import CardSonner from '$lib/cards/CardSonner.svelte';
	import CardSwitch from '$lib/cards/CardSwitch.svelte';
	import CardTextarea from '$lib/cards/CardTextarea.svelte';
	import CardTooltip from '$lib/cards/CardTooltip.svelte';
	import CardHeatmap from '$lib/cards/graphs/CardHeatmap.svelte';
	import CardLineGraph from '$lib/cards/graphs/CardLineGraph.svelte';
	import CardRingChart from '$lib/cards/graphs/CardRingChart.svelte';
	import { cn } from '$lib/utils';

	let baseCards = [
		{
			component: CardAlerts,
			className: '',
			label: 'Alerts',
			href: '/alert'
		},
		{
			component: CardAvatar,
			className: '',
			label: 'Avatars',
			href: '/avatar'
		},
		{
			component: CardBadge,
			className: '',
			label: 'Badges',
			href: '/badge'
		},
		{
			component: CardBox,
			className: '',
			label: 'Boxes',
			href: '/box'
		},
		{
			component: CardButtons,
			className: '',
			label: 'Buttons',
			href: '/button'
		},
		{
			component: CardChatBubble,
			className: '',
			label: 'Chat Bubbles',
			href: '/chat-bubble'
		},
		{
			component: CardCheckbox,
			className: '',
			label: 'Checkboxes',
			href: '/checkbox'
		},
		{
			component: CardImage,
			className: '',
			label: 'Images',
			href: '/image'
		},
		{
			component: CardInput,
			className: '',
			label: 'Inputs',
			href: '/input'
		},
		{
			component: CardModal,
			className: '',
			label: 'Modals',
			href: '/modal'
		},
		{
			component: CardNumberInput,
			className: '',
			label: 'Number Inputs',
			href: '/number-input'
		},
		{
			component: CardScrollArea,
			className: 'p-2',
			label: 'Scroll Areas',
			href: '/scroll-area'
		},
		{
			component: CardSlider,
			className: '',
			label: 'Sliders',
			href: '/slider'
		},
		{
			component: CardSonner,
			className: '',
			label: 'Sonner',
			href: '/sonner'
		},
		{
			component: CardSwitch,
			className: '',
			label: 'Switches',
			href: '/switch'
		},
		{
			component: CardTextarea,
			className: '',
			label: 'Textareas',
			href: '/textarea'
		},
		{
			component: CardTooltip,
			className: '',
			label: 'Tooltips',
			href: '/tooltip'
		},
		{
			component: CardCard,
			className: '',
			label: 'Cards',
			href: '/cards'
		},
		{
			component: CardHead,
			className: 'px-0 gap-0',
			label: 'Head',
			href: '/head'
		}
	];

	// sort cards by label
	baseCards.sort((a, b) => a.label.localeCompare(b.label));

	console.log('cards', baseCards.length);

	let graphCards = [
		{
			component: CardHeatmap,
			className: '',
			label: 'Heatmap',
			href: '/heatmap'
		},
		{
			component: CardLineGraph,
			className: '',
			label: 'Line Graph',
			href: '/line-graph'
		},
		{
			component: CardRingChart,
			className: '',
			label: 'Ring Chart',
			href: '/ring-chart'
		}
	];

	// sort graphCards by label
	graphCards.sort((a, b) => a.label.localeCompare(b.label));

	let socialCards = [
		{
			component: CardGithubCorner,
			className: '',
			label: 'Github Corner',
			href: '/github-corner'
		}
	];
</script>

<h2 class="text-base-800 dark:text-base-200 mb-4 text-xl font-medium">Base components</h2>
<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
	{#each baseCards as card}
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
				href={base + `/components${card.href}`}
				class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				<span class="text-base-900 dark:text-base-50 mx-2 text-sm font-semibold">{card.label}</span>
				<span class="absolute inset-0"></span>
			</a>
		</div>
	{/each}
</div>

<h2 class="text-base-800 dark:text-base-200 mt-24 mb-4 text-xl font-medium">Graph components</h2>
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
				href={base + `/components${card.href}`}
				class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
			>
				<span class="text-base-900 dark:text-base-50 mx-2 text-sm font-semibold">{card.label}</span>
				<span class="absolute inset-0"></span>
			</a>
		</div>
	{/each}
</div>
