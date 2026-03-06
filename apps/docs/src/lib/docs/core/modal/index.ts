import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'modal',
	title: 'Modal',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/dialog',
			label: 'bits-ui dialog',
			package: 'bits-ui',
			component: 'Dialog'
		}
	]
};
