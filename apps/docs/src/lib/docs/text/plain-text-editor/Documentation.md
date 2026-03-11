## Usage

```svelte
<script lang="ts">
	import { PlainTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<PlainTextEditor bind:content placeholder="Write something..." />
```
