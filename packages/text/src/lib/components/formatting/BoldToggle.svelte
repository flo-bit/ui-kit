<script lang="ts">
	import { Toggle } from '@foxui/core';
	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';

	let {
		editor = $bindable(),
		isBold = $bindable(false)
	}: {
		editor: Readable<Editor>;
		isBold?: boolean;
	} = $props();

	function updateState() {
		isBold = $editor.isActive('bold');
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
	onclick={() => $editor.chain().focus().toggleBold().run()}
	bind:pressed={() => isBold, () => {}}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
		<path
			fill-rule="evenodd"
			d="M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z"
			clip-rule="evenodd"
		/>
	</svg>
	<span class="sr-only">Bold</span>
</Toggle>
