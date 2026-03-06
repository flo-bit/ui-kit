## Usage

```svelte
<script lang="ts">
	import { AdvancedTextArea } from '@foxui/text';

	let content = $state('');

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log(content);
	};
</script>

<form onsubmit={handleSubmit}>
	<AdvancedTextArea bind:value={content} placeholder="Write something..." />
</form>

```
