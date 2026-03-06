import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';

export default {
	slug: 'voxel-art',
	title: 'Voxel Art',
	docs: Docs,
	example: Example,
	card: Card,
	sources: [
		{
			href: 'https://tympanus.net/codrops/2025/03/03/css-meets-voxel-art-building-a-rendering-engine-with-stacked-grids/',
			label: 'CSS Meets Voxel Art (Codrops)'
		}
	]
};
