<script lang="ts">
	import type { Editor } from '@tiptap/core';
	import { Modal, Button, Input } from '@foxui/core';
	import { insertEmbed } from './helpers';

	let { editor, open = $bindable(false) }: { editor: Editor; open: boolean } = $props();

	let url = $state('');
	let error = $state('');

	$effect(() => {
		if (!editor) return;
		const storage = editor.storage.embedExtension;
		if (storage) {
			storage.openModal = () => {
				open = true;
			};
			return () => {
				storage.openModal = null;
			};
		}
	});

	$effect(() => {
		if (open) {
			url = '';
			error = '';
		}
	});

	function submit() {
		const result = insertEmbed(editor, url);
		if (result === null) {
			close();
		} else {
			error = result;
		}
	}

	function close() {
		url = '';
		error = '';
		open = false;
	}
</script>

<Modal bind:open>
	<h3 class="text-lg font-semibold">Add Embed</h3>
	<Input
		type="text"
		placeholder="Paste a URL..."
		bind:value={url}
		onkeydown={(e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				submit();
			}
		}}
	/>
	{#if error}
		<p class="text-sm text-red-500">{error}</p>
	{/if}
	<div class="flex justify-end gap-2">
		<Button variant="secondary" onclick={close}>Cancel</Button>
		<Button variant="primary" onclick={submit}>Add</Button>
	</div>
</Modal>
