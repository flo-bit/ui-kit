<script lang="ts">
	import Example from './Example.svelte';
</script>

# Atproto Handle Popup

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { ATProtoHandlePopup } from '@foxui/social';
</script>

<ATProtoHandlePopup 
	onselected={(actor) => console.log('Selected actor:', actor)} />
```
