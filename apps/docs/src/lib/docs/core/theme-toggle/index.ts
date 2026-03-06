import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'theme-toggle',
	title: 'Theme Toggle',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://github.com/svecosystem/mode-watcher',
			label: 'mode-watcher'
		}
	]
};
