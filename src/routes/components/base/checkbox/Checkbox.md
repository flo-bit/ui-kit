<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Text } from '$lib/components/base/text';
	import { Checkbox } from '$lib/components/base/checkbox';
	import { Label } from '$lib/components/base/label';
</script>

# Checkbox

## Examples

Primary
<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="primary" />
	<Checkbox sizeVariant="default" variant="primary" />
	<Checkbox sizeVariant="lg" variant="primary" />
</div>

Secondary

<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="secondary" />
	<Checkbox sizeVariant="default" variant="secondary" />
	<Checkbox sizeVariant="lg" variant="secondary" />
</div>

With Label

<div class="flex items-center space-x-2 not-prose">
	<Checkbox id="terms" aria-labelledby="terms-label" variant="secondary" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I agree to the terms and sell my soul (and no I didn't read the terms)
	</Label>
</div>

## Usage

```svelte
<Checkbox 
	sizeVariant="sm"
	variant="primary" 
/>
```

