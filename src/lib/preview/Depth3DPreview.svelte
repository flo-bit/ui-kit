<script lang="ts">
	import { base } from '$app/paths';
	import Depth3D from '$lib/components/depth3d';
	import Subheading from '$lib/components/heading/Subheading.svelte';
</script>

<Subheading class="mb-6">Depth 3D</Subheading>

<div class="flex w-full items-center justify-center">
	<Depth3D
		sceneProps={{
			image: {
				image: base + '/images/depth3d/image.webp',
				depth: base + '/images/depth3d/depth.webp'
			},
			mouseMovement: false
		}}
	/>
</div>
