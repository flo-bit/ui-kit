<script lang="ts">
	import Example from './Example.svelte';
</script>

# Rich Text Editor

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { RichTextEditor } from '@fuxui/text';

	let content = $state('');
</script>

<RichTextEditor bind:content={content} placeholder="Write something..." />
```
