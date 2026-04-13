<script lang="ts">
	import { cn } from '@foxui/core';
	import type { Snippet } from 'svelte';
	import { BubbleMenu } from 'svelte-tiptap';
	import type { BubbleMenuPluginProps } from '@tiptap/extension-bubble-menu';

	import type { Editor } from 'svelte-tiptap';
	import type { Readable } from 'svelte/store';

	let {
		editor = $bindable(),
		class: className,
		children,
		...rest
	}: Partial<Omit<BubbleMenuPluginProps, 'editor' | 'element'>> & {
		editor: Readable<Editor>;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<BubbleMenu editor={$editor} {...rest}>
	<div
		class={cn(
			'bg-base-100 dark:bg-base-800 border-base-200 dark:border-base-700 text-base-900 dark:text-base-200 z-50 w-fit rounded-ui border p-1 shadow-md outline-none',
			className
		)}
	>
		{@render children?.()}
	</div>
</BubbleMenu>
