import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'checkbox',
	title: 'Checkbox',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/checkbox',
			label: 'bits-ui checkbox',
			package: 'bits-ui',
			component: 'Checkbox'
		}
	]
};
