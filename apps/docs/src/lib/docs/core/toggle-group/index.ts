import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'toggle-group',
	title: 'Toggle Group',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/toggle-group',
			label: 'bits-ui toggle-group',
			package: 'bits-ui',
			component: 'ToggleGroup'
		}
	]
};
