<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element: HTMLElement | undefined = $state();
	let editor: Editor | null = $state(null);

	onMount(() => {
		if (!element) return;

		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️ </p>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},

			editorProps: {
				attributes: {
					class:
						'prose prose-sm sm:prose mx-auto focus:outline-none dark:prose-invert bg-base-100 dark:bg-base-900 p-4 rounded-2xl'
				}
			},
			onUpdate: ({ editor }) => {
				const json = editor.getJSON();
				// send the content to an API here
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element}></div>
