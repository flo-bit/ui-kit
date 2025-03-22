<script lang="ts">
	import Example from './Example.svelte';
</script>

# Depth 3D

## Example

<Example />

## Usage

1. Choose an image (photos of one person in the center work best) and generate a depth map for it for example with [this tool](https://replicate.com/cjwbw/zoedepth)

2. Use component with image and depth map

```svelte
<script lang="ts">
	import { Depth3D } from 'fuchs';
</script>

<Depth3D
	sceneProps={{
		image: {
			image: '/images/image.png',
			depth: '/images/depth.png'
		},
		rounded: 1
	}}
/>
```

