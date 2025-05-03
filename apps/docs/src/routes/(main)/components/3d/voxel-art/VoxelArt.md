<script lang="ts">
	import Example from './Example.svelte';
</script>

# Depth 3D

## Example

<Example />

## Usage

Create your voxel art model with [this tool](https://voxels.layoutit.com/), download by clicking the "Download" button and use the component with the downloaded json file.

```svelte
<script lang="ts">
	import { VoxelArt } from '@fuxui/3d';

	import data from '$lib/assets/model.json';
</script>

<VoxelArt {data} />
```

You can also pass a `colorMap` prop to the component to change the colors of the voxel art, e.g. like this:

```svelte
<VoxelArt
	{data}
	colorMap={{
		'050505': 'var(--color-accent-50)',
		'101010': 'var(--color-accent-100)',
		'202020': 'var(--color-accent-200)',
		'303030': 'var(--color-accent-300)',
		'404040': 'var(--color-accent-400)',
		'505050': 'var(--color-accent-500)'
	}}
/>
```

## Credits

- inspired by [this article](https://tympanus.net/codrops/2025/03/03/css-meets-voxel-art-building-a-rendering-engine-with-stacked-grids/)
