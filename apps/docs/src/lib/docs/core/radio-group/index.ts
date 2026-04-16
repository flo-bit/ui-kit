import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'radio-group',
	title: 'Radio Group',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/radio-group',
			label: 'bits-ui radio-group',
			package: 'bits-ui',
			component: 'RadioGroup'
		}
	]
};
