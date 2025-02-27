<script>
	import { Subheading } from '$lib/components/heading';
	import { Text } from '$lib/components/text';
	import { Checkbox } from '$lib/components/checkbox';
	import { Label } from '$lib/components/label';
</script>

<Subheading>Checkboxes</Subheading>

<Text class="mb-2 mt-4">Primary</Text>
<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="primary" />
	<Checkbox sizeVariant="default" variant="primary" />
	<Checkbox sizeVariant="lg" variant="primary" />
</div>

<Text class="mb-2 mt-4">Secondary</Text>
<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="secondary" />
	<Checkbox sizeVariant="default" variant="secondary" />
	<Checkbox sizeVariant="lg" variant="secondary" />
</div>

<Text class="mb-2 mt-4">With Label</Text>
<div class="flex items-center space-x-2">
	<Checkbox id="terms" aria-labelledby="terms-label" variant="secondary" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I agree to the terms and sell my soul (and no I didn't read the terms)
	</Label>
</div>
