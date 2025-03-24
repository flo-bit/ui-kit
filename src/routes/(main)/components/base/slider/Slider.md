<script lang="ts">
	import SliderExample from './Example.svelte';
</script>

# Sliders

## Example

<SliderExample />

## Usage

```svelte
<script>
	import { Slider, SliderNumber } from 'fuchs';

	let value = $state(50);
</script>

<Slider bind:value min={0} max={100} />

<!-- With Number -->
<SliderNumber bind:value />
```
