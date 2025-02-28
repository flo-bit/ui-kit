<script>
	import { Subheading } from '$lib/components/heading';
	import { Input } from '$lib/components/input';
	import { Text } from '$lib/components/text';
</script>

<Subheading>Input</Subheading>

<Text class="mt-4 mb-2">Primary</Text>

<Input sizeVariant="sm" placeholder="Enter text here (small)" />
<Input placeholder="Enter text here (default)" />
<Input sizeVariant="lg" placeholder="Enter text here (large)" />

<Text class="mt-4 mb-2">Secondary</Text>

<Input variant="secondary" sizeVariant="sm" placeholder="Enter text here (small)" />
<Input variant="secondary" placeholder="Enter text here (default)" />
<Input variant="secondary" sizeVariant="lg" placeholder="Enter text here (large)" />
