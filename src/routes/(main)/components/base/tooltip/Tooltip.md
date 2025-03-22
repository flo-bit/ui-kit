<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Tooltip } from '$lib/components/base/tooltip';
	import { Text } from '$lib/components/base/text';
	import { Button } from '$lib/components/base/button';
	import { toast } from 'svelte-sonner';

	function handleClick() {
		toast.error('Don\'t click, just hover!')
	}
</script>

# Tooltip

## Example

<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip text="Hello there!" withContext>
		{#snippet child({ props })}
			<Button {...props} onclick={handleClick}>Hover me</Button>
		{/snippet}
	</Tooltip>
</div>

## Usage

```svelte
<script>
	import { Tooltip, Button } from 'fuchs';

	function handleClick() {
		console.log('clicked');
	}
</script>

<Tooltip text="Hello there!" withContext>
	{#snippet child({ props })}
		<Button {...props} onclick={handleClick}>Hover me</Button>
	{/snippet}
</Tooltip>
```
