import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'switch',
	title: 'Switch',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/switch',
			label: 'bits-ui switch',
			package: 'bits-ui',
			component: 'Switch'
		}
	]
};
