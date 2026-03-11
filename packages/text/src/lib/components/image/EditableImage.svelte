<script lang="ts">
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';
	import { Modal, Textarea, Button } from '@foxui/core';

	let props: NodeViewProps = $props();

	let modalOpen = $state(false);
	let altText = $state(props.node.attrs.alt ?? '');

	function openModal() {
		altText = props.node.attrs.alt ?? '';
		modalOpen = true;
	}

	function save() {
		props.updateAttributes({ alt: altText });
		modalOpen = false;
	}

	function cancel() {
		modalOpen = false;
	}
</script>

<NodeViewWrapper class="group/image relative">
	<img
		src={props.node.attrs.src}
		alt={props.node.attrs.alt}
		class="max-w-full rounded-xl {props.selected ? 'ring-accent-500 ring-2' : ''}"
	/>

	<div class="absolute right-2 bottom-2 opacity-0 transition-opacity group-hover/image:opacity-100">
		<Button size="sm" variant="secondary" onclick={openModal}>ALT</Button>
	</div>

	<Modal bind:open={modalOpen}>
		<h3 class="text-lg font-semibold">Edit alt text</h3>
		<Textarea bind:value={altText} placeholder="Describe this image..." />
		<div class="flex justify-end gap-2">
			<Button variant="secondary" onclick={cancel}>Cancel</Button>
			<Button variant="primary" onclick={save}>Save</Button>
		</div>
	</Modal>
</NodeViewWrapper>
