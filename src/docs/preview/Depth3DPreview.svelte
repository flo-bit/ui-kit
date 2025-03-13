<script lang="ts">
	import { base } from '$app/paths';
	import Depth3D from '$lib/components/3d/depth3d';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
</script>

<Subheading class="mb-6">Depth 3D</Subheading>

<div class="flex w-full items-center justify-center">
	<Depth3D
		sceneProps={{
			image: {
				image: base + '/images/depth3d/albert_einstein.webp',
				depth: base + '/images/depth3d/albert_einstein-depth.webp'
			},
			mouseMovement: false,
			rounded: 1
		}}
	/>
</div>
