import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'embed',
	title: 'Embed Extension',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{ href: 'https://tiptap.dev/docs/editor/extensions/nodes', label: 'TipTap' }
	]
};
