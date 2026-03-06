import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'popover',
	title: 'Popover',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/popover',
			label: 'bits-ui popover',
			package: 'bits-ui',
			component: 'Popover'
		}
	]
};
