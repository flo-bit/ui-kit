<script>
	import Example from './Example.svelte';
</script>

# Modal

## Examples

<Example />

## Usage

```svelte
<script>
	import { Modal, Button } from 'fuchs';

	let open = $state(false);
</script>

<Modal
	bind:open
	title="This is the default modal"
	yesButton={{ onclick: () => console.log('yes') }}
	noButton={{ onclick: () => console.log('no') }}
/>

<Button onclick={() => (open = true)}>Open modal</Button>
```
