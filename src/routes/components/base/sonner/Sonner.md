<script lang="ts">
	import { Button } from '$lib/components/base/button';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import { toast } from 'svelte-sonner';
</script>

# Sonner

## Example

<div class="flex flex-wrap gap-4">
	<Button
		onclick={() =>
			toast('Hello there', {
				description: 'General Kenobi!'
			})}>Default</Button
	>

    <Button
    	variant="green"
    	onclick={() =>
    		toast.success('Success!', {
    			description: "You are strong and wise and I'm very proud of you!"
    		})}>Success</Button
    >
    <Button
    	variant="red"
    	onclick={() =>
    		toast.error('Error!', {
    			description: 'These are not the droids you are looking for.'
    		})}>Error</Button
    >
    <Button
    	variant="blue"
    	onclick={() =>
    		toast.info('Info!', {
    			description: 'I heard spinning is a good trick.'
    		})}>Info</Button
    >

</div>

## Usage

In your root layout:

```svelte
<script>
	import { Toaster } from 'fuchs';
</script>

<Toaster />
```

In your page:

```svelte
<script>
	import { Button, toast } from 'fuchs';

	function handleClick() {
		toast('Hello there', { description: 'General Kenobi!' });
	}
</script>

<Button onclick={handleClick}>Default</Button>
```
