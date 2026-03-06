import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'toggle',
	title: 'Toggle',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/toggle',
			label: 'bits-ui toggle',
			package: 'bits-ui',
			component: 'Toggle'
		}
	]
};
