<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Tooltip } from '$lib/components/base/tooltip';
	import { Text } from '$lib/components/base/text';
</script>

<Subheading>Tooltip</Subheading>

<Text class="mt-4 mb-2">Primary</Text>
<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="primary" withContext>Hello there!</Tooltip>
</div>

<Text class="mt-4 mb-2">Secondary</Text>
<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip triggerText="Hover me" triggerVariant="secondary" withContext>Hello there!</Tooltip>
</div>
