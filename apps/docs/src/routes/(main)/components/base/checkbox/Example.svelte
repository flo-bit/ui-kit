<script>
	import { Checkbox, Label } from '@fuxui/base';
</script>

<h3>Primary</h3>

<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="primary" />
	<Checkbox sizeVariant="default" variant="primary" />
	<Checkbox sizeVariant="lg" variant="primary" />
</div>

<h3>Secondary</h3>

<div class="flex items-center gap-2">
	<Checkbox sizeVariant="sm" variant="secondary" />
	<Checkbox sizeVariant="default" variant="secondary" />
	<Checkbox sizeVariant="lg" variant="secondary" />
</div>

<h3>With Label</h3>

<div class="not-prose flex items-center space-x-2">
	<Checkbox id="terms" aria-labelledby="terms-label" variant="secondary" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I agree to the terms and sell my soul (and no I didn't read the terms)
	</Label>
</div>
