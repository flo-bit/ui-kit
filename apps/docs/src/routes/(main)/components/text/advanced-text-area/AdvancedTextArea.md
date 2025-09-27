<script lang="ts">
	import Example from './Example.svelte';
</script>

# Advanced Text Area

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { AdvancedTextArea } from '@fuxui/text';

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
