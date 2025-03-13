<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Tooltip } from '$lib/components/base/tooltip';
	import { Text } from '$lib/components/base/text';
</script>

# Tooltip

## Example

Primary

<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="primary" withContext>Hello there!</Tooltip>
</div>

Secondary

<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="secondary" withContext>Hello there!</Tooltip>
</div>

## Usage

```svelte
<Tooltip 
	triggerText="Hover me" 
	triggerVariant="primary" 
	withContext>
	Hello there!
</Tooltip>
```

