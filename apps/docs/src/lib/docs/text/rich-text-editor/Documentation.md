## Usage

```svelte
<script lang="ts">
	import { RichTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<RichTextEditor bind:content={content} placeholder="Write something..." />
```
