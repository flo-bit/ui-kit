import type { ComponentCard } from './components_base';

import CardExcalidraw from '$docs/cards/extras/CardExcalidraw.svelte';
import CardUndraw from '$docs/cards/extras/CardUndraw.svelte';
import CardStopwatch from '$docs/cards/extras/CardStopwatch.svelte';
import CardTimer from '$docs/cards/extras/CardTimer.svelte';
import CardPhone from '$docs/cards/extras/CardPhone.svelte';
import CardQuote from '$docs/cards/extras/CardQuote.svelte';
import CardSwiperCards from '$docs/cards/extras/CardSwiperCards.svelte';

export const extraComponents: ComponentCard[] = [
	{
		component: CardExcalidraw,
		label: 'Excalidraw',
		href: 'excalidraw'
	},
	{
		component: CardUndraw,
		label: 'Undraw',
		href: 'undraw'
	},
	{
		component: CardStopwatch,
		label: 'Stopwatch',
		href: 'stopwatch'
	},
	{
		component: CardTimer,
		label: 'Timer',
		href: 'timer'
	},
	{
		component: CardPhone,
		label: 'Phone',
		href: 'phone'
	},
	{
		component: CardQuote,
		label: 'Quote',
		href: 'quote'
	},
	{
		component: CardSwiperCards,
		label: 'Swiper Cards',
		href: 'swiper-cards'
	}
].sort((a, b) => a.label.localeCompare(b.label));
