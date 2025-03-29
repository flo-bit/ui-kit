import { threeDComponents } from './components_3d';
import { type ComponentCard, baseComponents } from './components_base';
import { colorComponents } from './components_colors';
import { extraComponents } from './components_extra';

export const components: {
	name: string;
	components: ComponentCard[];
	href: string;
}[] = [
	{
		name: 'Base components',
		components: baseComponents,
		href: 'base'
	},
	{
		name: 'Color components',
		components: colorComponents,
		href: 'colors'
	},
	{
		name: 'Extra components',
		components: extraComponents,
		href: 'extras'
	},
	{
		name: '3D components',
		components: threeDComponents,
		href: '3d'
	}
];
