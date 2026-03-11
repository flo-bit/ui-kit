<script lang="ts">
	import { Toggle, Popover, Input, Button } from '@foxui/core';
	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';

	let {
		editor = $bindable(),
		class: className
	}: {
		editor: Readable<Editor>;
		class?: string;
	} = $props();

	let isLink = $state(false);
	let popoverOpen = $state(false);
	let url = $state('');

	function updateState() {
		isLink = $editor.isActive('link');
	}

	$effect(() => {
		if (!$editor) return;

		$editor.on('transaction', updateState);
		updateState();

		return () => {
			$editor.off('transaction', updateState);
		};
	});

	function handleToggleClick() {
		if (isLink) {
			url = $editor.getAttributes('link').href ?? '';
		} else {
			url = '';
		}
		popoverOpen = true;
	}

	function save() {
		if (url.trim()) {
			$editor.chain().focus().setLink({ href: url.trim() }).run();
		} else {
			$editor.chain().focus().unsetLink().run();
		}
		popoverOpen = false;
	}

	function remove() {
		$editor.chain().focus().unsetLink().run();
		popoverOpen = false;
	}
</script>

<Popover bind:open={popoverOpen} side="top" sideOffset={8} class={className}>
	{#snippet child({ props })}
		<Toggle {...props} size="sm" pressed={isLink} onclick={handleToggleClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-5"
			>
				<path
					fill-rule="evenodd"
					d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.758a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1.04-.208 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 0 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.208-1.04Z"
					clip-rule="evenodd"
				/>
			</svg>
			<span class="sr-only">Link</span>
		</Toggle>
	{/snippet}

	<div class="flex flex-col gap-2">
		<Input
			placeholder="https://..."
			bind:value={url}
			variant="secondary"
			sizeVariant="sm"
			onkeydown={(e: KeyboardEvent) => {
				if (e.key === 'Enter') {
					save();
				}
			}}
		/>
		<div class="flex items-center gap-2">
			{#if isLink}
				<Button variant="secondary" size="sm" onclick={remove}>Remove</Button>
			{/if}
			<Button variant="primary" size="sm" onclick={save}>Save</Button>
		</div>
	</div>
</Popover>
