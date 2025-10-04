<script lang="ts">
	import { Slider, SliderNumber } from '@foxui/all';

	let value = $state(50);

	let value2 = $state(42);
</script>

<Slider bind:value type="single" />

<h3>With Number</h3>

<SliderNumber bind:value={value2} type="single" max={50} min={10} />
