import type { ComponentCard } from './components_base';
import CardExcalidraw from '$lib/cards/visual/CardExcalidraw.svelte';
import CardPhone from '$lib/cards/visual/CardPhone.svelte';
import CardQuote from '$lib/cards/visual/CardQuote.svelte';
import CardUndraw from '$lib/cards/visual/CardUndraw.svelte';

export const visualComponents: ComponentCard[] = [
	{
		component: CardExcalidraw,
		label: 'Excalidraw',
		href: 'excalidraw'
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
		component: CardUndraw,
		label: 'Undraw',
		href: 'undraw'
	}
].sort((a, b) => a.label.localeCompare(b.label));
