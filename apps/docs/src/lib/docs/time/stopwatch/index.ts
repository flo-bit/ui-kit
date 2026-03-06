import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';

export default {
	slug: 'stopwatch',
	title: 'Stopwatch',
	docs: Docs,
	example: Example,
	card: Card,
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
