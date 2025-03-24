<script lang="ts">
	import { Slider } from '$lib';
	import SliderNumber from '$lib/components/base/slider/SliderNumber.svelte';

	let value = $state(50);

	let value2 = $state(42);
</script>

<Slider bind:value />

<h3>With Number</h3>
<SliderNumber bind:value={value2} />
