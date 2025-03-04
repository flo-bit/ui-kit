<script>
	import VoxelArt from '$lib/components/3d/voxel-art/VoxelArt.svelte';
	import data from '$lib/assets/model-apple.json';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';

	import Text from '$lib/components/base/text/Text.svelte';
</script>

<Subheading class="mb-4">Voxel Art</Subheading>

<Text>CSS only</Text>

<div class="flex h-fit w-full items-center justify-center">
	<VoxelArt
		{data}
		colorMap={{
			'770000': 'var(--color-accent-900)',
			'870702': 'var(--color-accent-800)',
			A00F08: 'var(--color-accent-700)',
			B0190E: 'var(--color-accent-600)',
			'770077': 'var(--color-accent-900)',
			'007777': 'var(--color-accent-1000)'
		}}
	/>
</div>
