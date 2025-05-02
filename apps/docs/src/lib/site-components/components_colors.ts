import CardColorPicker from '$lib/cards/colors/CardColorPicker.svelte';
import CardColorSelect from '$lib/cards/colors/CardColorSelect.svelte';
import CardColorGradientPicker from '$lib/cards/colors/CardColorGradientPicker.svelte';
import type { ComponentCard } from './components_base';

export const colorsComponents: ComponentCard[] = [
	{
		component: CardColorPicker,
		label: 'Color Picker',
		href: 'color-picker'
	},
	{
		component: CardColorSelect,
		label: 'Color Select',
		href: 'color-select'
	},
	{
		component: CardColorGradientPicker,
		label: 'Color Gradient Picker',
		href: 'color-gradient-picker'
	}
].sort((a, b) => a.label.localeCompare(b.label));
