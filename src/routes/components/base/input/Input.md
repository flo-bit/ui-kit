<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Input } from '$lib/components/base/input';
	import { Text } from '$lib/components/base/text';
</script>

# Input

## Examples

Primary

<div class="flex flex-col gap-4 w-fit">
	<Input sizeVariant="sm" placeholder="Enter text here (small)" />
	<Input placeholder="Enter text here (default)" />
	<Input sizeVariant="lg" placeholder="Enter text here (large)" />
</div>

Secondary

<div class="flex flex-col gap-4 w-fit">
	<Input variant="secondary" sizeVariant="sm" placeholder="Enter text here (small)" />
	<Input variant="secondary" placeholder="Enter text here (default)" />
	<Input variant="secondary" sizeVariant="lg" placeholder="Enter text here (large)" />
</div>

## Usage

```svelte
<script>
	import { Input } from 'fuchs';

	let value = $state('');
</script>

<Input sizeVariant="sm" placeholder="Enter text here" bind:value />
```
