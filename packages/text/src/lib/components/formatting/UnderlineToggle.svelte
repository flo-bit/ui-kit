<script lang="ts">
	import { Toggle } from '@foxui/core';
	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';

	let {
		editor = $bindable(),
		isUnderline = $bindable(false)
	}: {
		editor: Readable<Editor>;
		isUnderline?: boolean;
	} = $props();

	function updateState() {
		isUnderline = $editor.isActive('underline');
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
	onclick={() => $editor.chain().focus().toggleUnderline().run()}
	bind:pressed={() => isUnderline, () => {}}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
		<path
			fill-rule="evenodd"
			d="M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z"
			clip-rule="evenodd"
		/>
	</svg>
	<span class="sr-only">Underline</span>
</Toggle>
