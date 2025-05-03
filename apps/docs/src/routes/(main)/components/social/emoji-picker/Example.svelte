<script lang="ts">
	import { Button, toast } from '@fuxui/base';
	import { EmojiPicker, PopoverEmojiPicker } from '@fuxui/social';
</script>

<EmojiPicker onpicked={(emoji) => toast('selected emoji: ' + emoji.unicode)} />

<h3>Popover Emoji Picker</h3>

<PopoverEmojiPicker
	onpicked={(emoji) => toast('selected emoji: ' + emoji.unicode)}
	triggerText="Emoji Picker"
>
	{#snippet child({ props })}
		<Button size="iconLg" {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-smile-icon lucide-smile"
				><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line
					x1="9"
					x2="9.01"
					y1="9"
					y2="9"
				/><line x1="15" x2="15.01" y1="9" y2="9" /></svg
			>
		</Button>
	{/snippet}
</PopoverEmojiPicker>
