<script lang="ts">
	import Example from './Example.svelte';
</script>

# Depth 3D

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { ModelPicker } from '@fuxui/3d';

	const items = [
		{
			path: '/path/to/model.gltf',
			label: 'Model A'
		},
		{
			path: '/path/to/model.gltf',
			label: 'Model B'
		}
	];
</script>

<ModelPicker
	{items}
	onselect={({ path, label }) => {
		console.log(path, label);
	}}
/>
```

## Credits

- Models from [Toy Car Kit](https://kenney.nl/assets/toy-car-kit) by [Kenney](https://kenney.nl)
