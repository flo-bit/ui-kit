<script lang="ts">
	import { Toggle } from '@foxui/core';
	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';

	let {
		editor = $bindable(),
		isItalic = $bindable(false)
	}: {
		editor: Readable<Editor>;
		isItalic?: boolean;
	} = $props();

	function updateState() {
		isItalic = $editor.isActive('italic');
	}

	$effect(() => {
		if (!$editor) return;

		$editor.on('transaction', updateState);
		updateState();

		return () => {
			$editor.off('transaction', updateState);
		};
	});
</script>

<Toggle
	size="sm"
	onclick={() => $editor.chain().focus().toggleItalic().run()}
	bind:pressed={() => isItalic, () => {}}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
		<path
			fill-rule="evenodd"
			d="M10.497 3.744a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.275l-5.357 15.002h2.632a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5h3.275l5.357-15.002h-2.632a.75.75 0 0 1-.75-.75Z"
			clip-rule="evenodd"
		/>
	</svg>
	<span class="sr-only">Italic</span>
</Toggle>
