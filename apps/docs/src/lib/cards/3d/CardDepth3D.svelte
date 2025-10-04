<script lang="ts">
	import { base } from '$app/paths';
	import { Depth3D } from '@foxui/3d';
</script>

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
