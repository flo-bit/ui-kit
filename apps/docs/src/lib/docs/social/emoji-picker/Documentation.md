## Usage

```svelte
<EmojiPicker onpicked={(emoji) => console.log('selected emoji: ' + emoji.unicode)} />

<!-- or popover emoji picker -->

<PopoverEmojiPicker onpicked={(emoji) => console.log('selected emoji: ' + emoji.unicode)}>
	{#snippet child({ props })}
		<Button size="iconLg" {...props}>Open Emoji Picker</Button>
	{/snippet}
</PopoverEmojiPicker>
```
