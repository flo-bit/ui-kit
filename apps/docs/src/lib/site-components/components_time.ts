import type { ComponentCard } from './components_base';
import CardStopwatch from '$lib/cards/time/CardStopwatch.svelte';
import CardTimer from '$lib/cards/time/CardTimer.svelte';

export const timeComponents: ComponentCard[] = [
	{
		component: CardStopwatch,
		label: 'Stopwatch',
		href: 'stopwatch'
	},
	{
		component: CardTimer,
		label: 'Timer',
		href: 'timer'
	}
].sort((a, b) => a.label.localeCompare(b.label));
