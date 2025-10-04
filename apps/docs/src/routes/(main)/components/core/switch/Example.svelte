<script>
	import { Switch, Label } from '@foxui/all';

	let checked = $state(false);
	let checked2 = $state(true);
</script>

<div class="not-prose flex flex-col gap-2">
	<Switch bind:checked onCheckedChange={() => (checked2 = !checked2)} />
	<Switch bind:checked={checked2} onCheckedChange={() => (checked = !checked)} />
	<Switch disabled />
</div>

<h3>With Label</h3>

<div class="not-prose flex items-center space-x-2">
	<Switch id="terms-switch" aria-labelledby="terms-switch-label" />
	<Label
		id="terms-switch-label"
		for="terms-switch"
		class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Yes, I agree to the terms and sell my soul (and no I didn't read the terms)
	</Label>
</div>
