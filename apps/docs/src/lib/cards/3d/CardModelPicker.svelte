<script lang="ts">
	import { Image } from '@fuxui/base';

	import image from '$lib/assets/models/vehicle-monster-truck.png';
	import image2 from '$lib/assets/models/vehicle-racer.png';
	import image3 from '$lib/assets/models/vehicle-racer-low.png';
</script>

<div class="flex h-44 max-h-44 w-full max-w-full items-center justify-center gap-6">
	<Image src={image} alt="Vehicle Monster Truck" class="scale-125" />
	<Image
		src={image2}
		alt="Vehicle Racer"
		class="scale-125"
		containerClasses="bg-base-200 rounded-xl dark:bg-base-900"
	/>
	<Image src={image3} alt="Vehicle Racer Low" class="scale-125" />
</div>
