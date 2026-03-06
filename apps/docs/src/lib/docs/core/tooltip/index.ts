import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'tooltip',
	title: 'Tooltip',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/tooltip',
			label: 'bits-ui tooltip',
			package: 'bits-ui',
			component: 'Tooltip'
		}
	]
};
