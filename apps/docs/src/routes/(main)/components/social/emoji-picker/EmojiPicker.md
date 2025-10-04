<script lang="ts">
	import Example from './Example.svelte';
</script>

# Emoji Picker

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { EmojiPicker } from '@foxui/social';
</script>

<EmojiPicker 
	onpicked={(emoji) => console.log('selected emoji: ' + emoji.unicode)} />

// or popover emoji picker

<PopoverEmojiPicker onpicked={(emoji) => console.log('selected emoji: ' + emoji.unicode)}>
	{#snippet child({ props })}
		<Button size="iconLg" {...props}>
			Open Emoji Picker
		</Button>
	{/snippet}
</PopoverEmojiPicker>
```
