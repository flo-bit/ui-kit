import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'select',
	title: 'Select',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/select',
			label: 'bits-ui select',
			package: 'bits-ui',
			component: 'Select'
		}
	]
};
