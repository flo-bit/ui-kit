<script lang="ts">
	import { base } from '$app/paths';
	import { ModelPicker } from '$lib';
	import Image from '$lib/components/base/image/Image.svelte';

	import image from '$docs/assets/models/vehicle-monster-truck.png';
	import image2 from '$docs/assets/models/vehicle-racer.png';
	import image3 from '$docs/assets/models/vehicle-racer-low.png';
</script>

<div class="flex h-44 max-h-44 w-full max-w-full items-center justify-center gap-6">
	<Image src={image} alt="Vehicle Monster Truck" class="scale-125" />
	<Image src={image2} alt="Vehicle Racer" class="scale-125" />
	<Image src={image3} alt="Vehicle Racer Low" class="scale-125" />
</div>
