import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'sonner',
	title: 'Sonner',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://sonner.emilkowal.ski/',
			label: 'sonner'
		}
	]
};
