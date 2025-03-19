import CardExcalidraw from '$docs/cards/extras/CardExcalidraw.svelte';
import CardUndraw from '$docs/cards/extras/CardUndraw.svelte';
import CardColorPicker from '$docs/cards/extras/CardColorPicker.svelte';
import CardColorSelect from '$docs/cards/extras/CardColorSelect.svelte';

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
	}
].sort((a, b) => a.label.localeCompare(b.label));
