<script>
	import { VoxelArt } from '@fuxui/3d';
	import data from '$lib/assets/apple.json';
</script>

<div class="-mt-8 flex h-full w-full items-center justify-center">
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
		cubeSize={10}
	/>
</div>
