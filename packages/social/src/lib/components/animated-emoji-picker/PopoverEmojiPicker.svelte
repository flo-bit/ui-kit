<script lang="ts">
	import { Popover, type PopoverProps, cn } from '@foxui/core';
	import EmojiPicker from './EmojiPicker.svelte';
	import type { NativeEmoji } from './emoji';
	import type { Snippet } from 'svelte';

	let {
		onpicked,
		children,
		class: className,
		open = $bindable(false),
		triggerRef = $bindable(null),
		...props
	}: {
		onpicked?: (emoji: NativeEmoji) => void;
		children?: Snippet;
		class?: string;
	} & PopoverProps = $props();
</script>

<Popover {...props} bind:triggerRef bind:open class={cn('p-0', className)}>
	{@render children?.()}
	<EmojiPicker {onpicked} />
</Popover>
