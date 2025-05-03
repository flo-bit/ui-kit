<script lang="ts">
	import { Popover, type PopoverProps, cn } from '@fuxui/base';
	import EmojiPicker from './EmojiPicker.svelte';
	import type { Emoji } from './emoji';
	import type { Snippet } from 'svelte';

	let {
		onpicked,
		children,
		class: className,
		...props
	}: {
		onpicked?: (emoji: Emoji) => void;
		children?: Snippet;
		class?: string;
	} & PopoverProps = $props();
</script>

<Popover {...props} class={cn('px-0 pb-0 pt-1', className)}>
	{@render children?.()}
	<EmojiPicker {onpicked} />
</Popover>
