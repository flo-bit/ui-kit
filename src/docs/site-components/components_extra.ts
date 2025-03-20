import CardExcalidraw from '$docs/cards/extras/CardExcalidraw.svelte';
import CardUndraw from '$docs/cards/extras/CardUndraw.svelte';
import CardColorPicker from '$docs/cards/extras/CardColorPicker.svelte';
import CardColorSelect from '$docs/cards/extras/CardColorSelect.svelte';
import CardStopwatch from '$docs/cards/extras/CardStopwatch.svelte';
import CardTimer from '$docs/cards/extras/CardTimer.svelte';
import CardPhone from '$docs/cards/extras/CardPhone.svelte';
import CardQuote from '$docs/cards/extras/CardQuote.svelte';

export const extraComponents = [
	{
		component: CardExcalidraw,
		className: '',
		label: 'Excalidraw',
		href: 'excalidraw'
	},
	{
		component: CardUndraw,
		className: '',
		label: 'Undraw',
		href: 'undraw'
	},
	{
		component: CardColorPicker,
		className: '',
		label: 'Color Picker',
		href: 'color-picker'
	},
	{
		component: CardColorSelect,
		className: '',
		label: 'Color Select',
		href: 'color-select'
	},
	{
		component: CardStopwatch,
		className: '',
		label: 'Stopwatch',
		href: 'stopwatch'
	},
	{
		component: CardTimer,
		className: '',
		label: 'Timer',
		href: 'timer'
	},
	{
		component: CardPhone,
		className: '',
		label: 'Phone',
		href: 'phone'
	},
	{
		component: CardQuote,
		className: '',
		label: 'Quote',
		href: 'quote'
	}
].sort((a, b) => a.label.localeCompare(b.label));
