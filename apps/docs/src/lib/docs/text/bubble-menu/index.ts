import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'bubble-menu',
	title: 'Bubble Menu',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu',
			label: 'TipTap'
		}
	]
};
