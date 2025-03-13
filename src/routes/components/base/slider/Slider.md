<script lang="ts">
	import { Subheading } from '$lib/components/base/heading';
	import { Slider } from '$lib/components/base/slider';

	let value = $state(50);
</script>

# Slider

## Example

<Slider bind:value />

## Usage

```svelte
<script>
	let value = $state(50);
</script>

<Slider 
	bind:value 
	min={0} 
	max={100} 
/>
```
