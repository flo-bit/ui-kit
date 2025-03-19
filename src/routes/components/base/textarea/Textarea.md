<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Text } from '$lib/components/base/text';
	import { Textarea } from '$lib/components/base/textarea';
</script>

# Textarea

## Example

Primary

<div class="flex flex-col md:flex-row gap-2">
	<Textarea placeholder="Enter text here (small)" sizeVariant="sm" />
	<Textarea placeholder="Enter text here (default)" />
	<Textarea placeholder="Enter text here (large)" sizeVariant="lg" />
</div>

Secondary

<div class="flex flex-col md:flex-row gap-2">
	<Textarea placeholder="Enter text here (small)" variant="secondary" sizeVariant="sm" />
	<Textarea placeholder="Enter text here (default)" variant="secondary" />
	<Textarea placeholder="Enter text here (large)" variant="secondary" sizeVariant="lg" />
</div>

## Usage

```svelte
<script>
	import { Textarea } from 'fuchs';

	let value = $state('');
</script>

<Textarea placeholder="Enter text here" bind:value />
```
