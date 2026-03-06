import { type ComponentCard, baseComponents } from './components_base';
import { colorsComponents } from './components_colors';
import { socialComponents } from './components_social';
import { textComponents } from './components_text';
import { timeComponents } from './components_time';
import { visualComponents } from './components_visual';

export const components: {
	name: string;
	components: ComponentCard[];
	href: string;
}[] = [
	{
		name: 'Core',
		components: baseComponents,
		href: 'core'
	},
	{
		name: 'Colors',
		components: colorsComponents,
		href: 'colors'
	},
	{
		name: 'Social',
		components: socialComponents,
		href: 'social'
	},
	{
		name: 'Text',
		components: textComponents,
		href: 'text'
	},
	{
		name: 'Visual',
		components: visualComponents,
		href: 'visual'
	},
	{
		name: 'Time',
		components: timeComponents,
		href: 'time'
	}
];
