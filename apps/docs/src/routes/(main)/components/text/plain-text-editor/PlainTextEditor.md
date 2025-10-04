<script lang="ts">
	import Example from './Example.svelte';
</script>

# Plain Text Editor

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { PlainTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<PlainTextEditor bind:value={content} placeholder="Write something..." />
```
