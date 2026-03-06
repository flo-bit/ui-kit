import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'atproto-handle-popup',
	title: 'Atproto Handle Popup',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://bits-ui.com/docs/components/command',
			label: 'bits-ui command',
			package: 'bits-ui',
			component: 'Command'
		}
	]
};
