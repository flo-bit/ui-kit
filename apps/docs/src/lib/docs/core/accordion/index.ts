import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'accordion',
	title: 'Accordion',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/accordion',
			label: 'bits-ui accordion',
			package: 'bits-ui',
			component: 'Accordion'
		}
	]
};
