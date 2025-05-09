import CardPlainTextEditor from '$lib/cards/text/CardPlainTextEditor.svelte';
import CardRichTextEditor from '$lib/cards/text/CardRichTextEditor.svelte';
import type { ComponentCard } from './components_base';

export const textComponents: ComponentCard[] = [
	{
		component: CardPlainTextEditor,
		label: 'Plain Text Editor',
		href: 'plain-text-editor'
	},
	{
		component: CardRichTextEditor,
		label: 'Rich Text Editor',
		href: 'rich-text-editor'
	}
].sort((a, b) => a.label.localeCompare(b.label));
