<script lang="ts">
	import { Slider, SliderNumber } from '@fuxui/base';

	let value = $state(50);
	let value2 = $state(42);
	let rangeValue = $state([20, 80]);
	let stepValue = $state(25);
	let stepValue2 = $state(0.5);
	let arrayStepValue = $state(4);
	let arrayStepValue2 = $state([8, 24]);
</script>

<div class="space-y-6">
	<div>
		<h4 class="mb-3 text-sm font-medium">Basic Slider</h4>
		<Slider bind:value type="single" />
		<p class="mt-2 text-sm text-gray-600">Value: {value}</p>
	</div>

	<div>
		<h4 class="mb-3 text-sm font-medium">With Number Display</h4>
		<SliderNumber bind:value={value2} type="single" max={50} min={10} />
	</div>

	<div>
		<h4 class="mb-3 text-sm font-medium">Range Slider</h4>
		<Slider bind:value={rangeValue} type="range" />
		<p class="mt-2 text-sm text-gray-600">Range: {rangeValue[0]} - {rangeValue[1]}</p>
	</div>
</div>
