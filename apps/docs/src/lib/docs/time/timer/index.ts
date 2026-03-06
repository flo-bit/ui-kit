import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'timer',
	title: 'Timer',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://github.com/joshnuss/svelte-reactive-timer',
			label: 'svelte-reactive-timer'
		},
		{
			href: 'https://number-flow.barvian.me/',
			label: 'number-flow'
		}
	]
};
