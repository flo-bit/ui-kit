<script lang="ts">
	import { Button } from '@foxui/all';
	import { EmojiPicker, PopoverEmojiPicker } from '@foxui/all';
	import { Smile } from '@foxui/all/icons';

	let emojis: string[] = $state([]);
</script>

<div class="mb-4 flex h-14 flex-wrap items-center gap-2 text-2xl">
	<div class="text-sm font-medium">Last picked emojis:</div>
	{#each emojis.slice(0, 5) as emoji}
		<div>{emoji}</div>
	{/each}
</div>

<EmojiPicker search favorites onpicked={(emoji) => emojis.unshift(emoji.unicode)} />

<h3>Popover Emoji Picker</h3>

<PopoverEmojiPicker
	search
	favorites
	onpicked={(emoji) => emojis.unshift(emoji.unicode)}
	triggerText="Emoji Picker"
>
	{#snippet child({ props })}
		<Button size="iconLg" {...props}>
			<Smile size={24} strokeWidth={1.5} />
		</Button>
	{/snippet}
</PopoverEmojiPicker>
