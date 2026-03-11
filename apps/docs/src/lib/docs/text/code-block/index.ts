import Docs from './Documentation.md';
import Example from './Example.svelte';
import Card from './Card.svelte';
import api from './api';

export default {
	slug: 'code-block',
	title: 'Code Block Extension',
	docs: Docs,
	example: Example,
	card: Card,
	api,
	sources: [
		{
			href: 'https://tiptap.dev/docs/editor/extensions/nodes/code-block-lowlight',
			label: 'TipTap'
		}
	]
};
