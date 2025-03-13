<script>
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import NumberInput from '$lib/components/base/number-input/NumberInput.svelte';
</script>

# Number Input

## Examples

<NumberInput />

## Usage

```svelte
<script>
	let value = $state(0);
</script>

<NumberInput 
	min={0} 
	max={100} 
	bind:value 
/>
```

