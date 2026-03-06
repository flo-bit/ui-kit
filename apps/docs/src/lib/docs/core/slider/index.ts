import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'slider',
	title: 'Sliders',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/slider',
			label: 'bits-ui slider',
			package: 'bits-ui',
			component: 'Slider'
		}
	]
};
