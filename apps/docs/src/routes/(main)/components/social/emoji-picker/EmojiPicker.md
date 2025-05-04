<script lang="ts">
	import Example from './Example.svelte';
</script>

# Emoji Picker

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { EmojiPicker } from '@fuxui/social';
</script>

<EmojiPicker 
	onpicked={(emoji) => console.log('selected emoji: ' + emoji.unicode)} />
```
