import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'relative-time',
	title: 'Relative Time',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://github.com/CaptainCodeman/svelte-relative-time',
			label: 'svelte-relative-time'
		}
	]
};
