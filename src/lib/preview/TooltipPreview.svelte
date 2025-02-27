<script>
	import { Subheading } from '$lib/components/heading';
	import { Tooltip } from '$lib/components/tooltip';
	import { Text } from '$lib/components/text';
</script>

<Subheading>Tooltip</Subheading>

<Text class="mb-2 mt-4">Primary</Text>
<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="primary" withContext>Hello there!</Tooltip>
</div>

<Text class="mb-2 mt-4">Secondary</Text>
<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="secondary" withContext>Hello there!</Tooltip>
</div>
