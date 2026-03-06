## Usage

1. Choose an image (photos of one person in the center work best) and generate a depth map for it for example with [this tool](https://replicate.com/cjwbw/zoedepth)

2. Use component with image and depth map

```svelte
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
