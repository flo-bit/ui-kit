import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'core-rich-text-editor',
	title: 'Core Rich Text Editor',
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
