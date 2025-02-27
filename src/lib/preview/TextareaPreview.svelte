<script>
	import { Subheading } from '$lib/components/heading';
	import { Text } from '$lib/components/text';
	import { Textarea } from '$lib/components/textarea';
</script>

<Subheading>Textarea</Subheading>

<Text class="mb-2 mt-4">Primary</Text>

<Textarea placeholder="Enter text here (small)" sizeVariant="sm" />
<Textarea placeholder="Enter text here (default)" />
<Textarea placeholder="Enter text here (large)" sizeVariant="lg" />

<Text class="mb-2 mt-4">Secondary</Text>

<Textarea placeholder="Enter text here (small)" variant="secondary" sizeVariant="sm" />
<Textarea placeholder="Enter text here (default)" variant="secondary" />
<Textarea placeholder="Enter text here (large)" variant="secondary" sizeVariant="lg" />
