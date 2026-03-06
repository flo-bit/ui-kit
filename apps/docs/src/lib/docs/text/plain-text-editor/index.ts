import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'plain-text-editor',
	title: 'Plain Text Editor',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://tiptap.dev/',
			label: 'TipTap'
		}
	]
};
