<script lang="ts">
	import Example from './Example.svelte';
</script>

# Image Masonry

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { ImageMasonry } from '@foxui/visual';

	const images = [
		{
			src: 'https://picsum.photos/200/300',
			name: 'Image 1',
			width: 200,
			height: 300,
			// optional either onclick
			onclick: () => {
				console.log('clicked');
			}
		},
		{
			src: 'https://picsum.photos/200/300',
			name: 'Image 2',
			width: 200,
			height: 150,
			// or href
			href: '#'
		},
		{
			src: 'https://picsum.photos/200/300',
			name: 'Image 3',
			width: 100,
			height: 100
		},
	];
</script>

<ImageMasonry {images} />
```
