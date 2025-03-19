import CardExcalidraw from '$docs/cards/extras/CardExcalidraw.svelte';
import CardUndraw from '$docs/cards/extras/CardUndraw.svelte';
import CardColorPicker from '$docs/cards/extras/CardColorPicker.svelte';

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
	}
].sort((a, b) => a.label.localeCompare(b.label));
