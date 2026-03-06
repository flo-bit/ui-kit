<script lang="ts">
	import { base } from '$app/paths';
	import { Depth3D } from '@foxui/all';
</script>

<div class="flex w-full items-center justify-center">
	<Depth3D
		sceneProps={{
			image: {
				image: base + '/images/depth3d/albert_einstein.webp',
				depth: base + '/images/depth3d/albert_einstein-depth.webp'
			},
			rounded: 1,
			mouseMovement: false
		}}
	/>
</div>
