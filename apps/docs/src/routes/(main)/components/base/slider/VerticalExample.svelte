<script lang="ts">
	import { Slider, SliderNumber } from '@fuxui/base';

	let value = $state(30);
	let value2 = $state(65);
	let rangeValue = $state([25, 75]);
</script>

<div class="flex gap-8 items-start">
	<div class="flex flex-col items-center">
		<h4 class="mb-3 text-sm font-medium">Basic Vertical</h4>
		<div class="h-48 flex items-center">
			<Slider bind:value orientation="vertical" type="single" />
		</div>
		<p class="mt-2 text-sm text-gray-600">Value: {value}</p>
	</div>

	<div class="flex flex-col items-center">
		<h4 class="mb-3 text-sm font-medium">With Number</h4>
		<div class="h-48 flex items-center">
			<SliderNumber bind:value={value2} orientation="vertical" type="single" />
		</div>
	</div>

	<div class="flex flex-col items-center">
		<h4 class="mb-3 text-sm font-medium">Vertical Range</h4>
		<div class="h-48 flex items-center">
			<Slider bind:value={rangeValue} orientation="vertical" type="range" />
		</div>
		<p class="mt-2 text-sm text-gray-600">Range: {rangeValue[0]} - {rangeValue[1]}</p>
	</div>
</div>