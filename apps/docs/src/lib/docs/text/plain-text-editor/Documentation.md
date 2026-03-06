## Usage

```svelte
<script lang="ts">
	import { PlainTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<PlainTextEditor bind:value={content} placeholder="Write something..." />
```
