<script lang="ts">
	import Example from './Example.svelte';
</script>

# Sonner

## Example

<Example />

## Usage

In your root layout:

```svelte
<script>
	import { Toaster } from '@fuxui/base';
</script>

<Toaster />
```

In your page:

```svelte
<script>
	import { Button, toast } from '@fuxui/base';

	function handleClick() {
		toast('Hello there', { description: 'General Kenobi!' });
	}
</script>

<Button onclick={handleClick}>Default</Button>
```
