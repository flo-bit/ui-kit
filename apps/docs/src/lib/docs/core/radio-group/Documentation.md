## Usage

A set of radio buttons where exactly one can be selected at a time.

The simplest way is to pass an `options` array — items, labels, and spacing are handled for you:

```svelte
<script lang="ts">
	import { RadioGroup } from '@foxui/all';

	let value = $state('comfortable');
</script>

<RadioGroup
	bind:value
	options={[
		{ value: 'default', label: 'Default' },
		{ value: 'comfortable', label: 'Comfortable' },
		{ value: 'compact', label: 'Compact' }
	]}
/>
```

## With descriptions

Each option can carry an optional `description`:

```svelte
<RadioGroup
	bind:value
	options={[
		{ value: 'card', label: 'Card', description: 'Pay with a credit or debit card.' },
		{ value: 'paypal', label: 'PayPal', description: 'Redirect to PayPal to complete payment.' }
	]}
/>
```

## Horizontal layout

```svelte
<RadioGroup bind:value orientation="horizontal" options={[...]} />
```

## Custom rendering

For full control, skip `options` and compose with `RadioGroupItem`:

```svelte
<script lang="ts">
	import { RadioGroup, RadioGroupItem, Label } from '@foxui/all';

	let value = $state('option-one');
</script>

<RadioGroup bind:value>
	<label class="flex items-center gap-2">
		<RadioGroupItem value="option-one" id="option-one" />
		<Label for="option-one">Option One</Label>
	</label>
	<label class="flex items-center gap-2">
		<RadioGroupItem value="option-two" id="option-two" />
		<Label for="option-two">Option Two</Label>
	</label>
</RadioGroup>
```
