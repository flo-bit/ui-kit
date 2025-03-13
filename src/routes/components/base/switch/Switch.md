<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Switch } from '$lib/components/base/switch';
	import { Label } from '$lib/components/base/label';
	import { Text } from '$lib/components/base/text';

	let checked = $state(false);

	let checked2 = $state(true);
</script>

# Switch

## Example

<div class="flex flex-col gap-2">
	<Switch bind:checked onCheckedChange={() => (checked2 = !checked2)} />
	<Switch bind:checked={checked2} onCheckedChange={() => (checked = !checked)} />
	<Switch disabled />
</div>

<Text class="mt-4 mb-2">With Label</Text>
<div class="flex items-center space-x-2">
	<Switch id="terms-switch" aria-labelledby="terms-switch-label" />
	<Label
		id="terms-switch-label"
		for="terms-switch"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I agree to the terms and sell my soul (and no I didn't read the terms)
	</Label>
</div>

## Usage

```svelte
<Switch bind:checked />
```