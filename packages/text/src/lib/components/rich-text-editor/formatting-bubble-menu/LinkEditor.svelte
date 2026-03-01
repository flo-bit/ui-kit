<script lang="ts">
	import { Button, Input } from '@foxui/core';
	import type { Editor } from 'svelte-tiptap';
	import { tick } from 'svelte';

	let {
		editor
	}: {
		editor: Editor;
	} = $props();

	let link = $state('');
	let linkInput = $state<HTMLInputElement | null>(null);

	function processLink(value: string) {
		return value.includes(':') ? value : `http://${value}`;
	}

	function saveLink() {
		if (link === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();
		} else {
			editor.chain().focus().extendMarkRange('link').setLink({ href: processLink(link) }).run();
		}
	}

	function removeLink() {
		editor.chain().focus().extendMarkRange('link').unsetLink().run();
	}

	// Read current link href and focus input
	$effect(() => {
		const href = editor.getAttributes('link').href;
		link = href ?? '';
		tick().then(() => {
			linkInput?.focus();
		});
	});
</script>

<div class="flex items-center gap-1">
	<Input
		bind:ref={linkInput}
		sizeVariant="sm"
		bind:value={link}
		placeholder="Enter link"
		onblur={saveLink}
		onkeydown={(e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				saveLink();
			}
		}}
	/>
	<Button size="iconSm" onclick={saveLink}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>

		<span class="sr-only">save link</span>
	</Button>
	<Button size="iconSm" onclick={removeLink} variant="ghost">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
			/>
		</svg>
		<span class="sr-only">remove link</span>
	</Button>
</div>
