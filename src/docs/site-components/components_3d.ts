import type { ComponentCard } from './components_base';
import CardDepth3D from '$docs/cards/3d/CardDepth3D.svelte';
import CardVoxelArt from '$docs/cards/3d/CardVoxelArt.svelte';
import CardModelPicker from '$docs/cards/3d/CardModelPicker.svelte';

export const threeDComponents: ComponentCard[] = [
	{
		component: CardDepth3D,
		label: 'Depth 3D',
		href: 'depth-3d'
	},
	{
		component: CardVoxelArt,
		label: 'Voxel Art',
		href: 'voxel-art'
	},
	{
		component: CardModelPicker,
		label: 'Model Picker',
		href: 'model-picker'
	}
].sort((a, b) => a.label.localeCompare(b.label));
