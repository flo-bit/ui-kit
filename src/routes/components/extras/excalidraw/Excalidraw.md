<script lang="ts">
	import ExcalidrawExample from './Example.svelte';
</script>

# Excalidraw

## Example

<ExcalidrawExample />

## Usage

1. Draw a diagram in [excalidraw](https://excalidraw.com/) with the default colors and export it as a svg without a background.

2. Import that svg and use it with the excalidraw component, colors will be automatically changed to your theme colors.

```svelte
<script lang="ts">
	import { Excalidraw } from 'fuchs';

	import svg from '$docs/assets/demo.svg?raw';
</script>

<Excalidraw {svg} alt="Excalidraw Demo" caption="This is a demo of the Excalidraw component." />
```