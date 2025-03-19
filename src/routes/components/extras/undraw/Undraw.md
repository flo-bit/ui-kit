<script lang="ts">
	import UndrawExample from './Example.svelte';
	import {Alert} from '$lib';
</script>

# Undraw

## Example

<UndrawExample />

## Usage

<Alert variant="default" type="warning" title="Doesn't work automatically in dark mode">
	<span>
		Use the `colorMap` prop to change the colors of the illustration like in the example below to make it work in both light and dark mode.
	</span>
</Alert>


1. Download a svg illustration from [undraw](https://undraw.co/illustrations) leaving the theme color as it is (#6c63ff).
2. Import that svg and use it with the undraw component. This will automatically change the theme color to your theme color.

```svelte
<script lang="ts">
	import Undraw from '$lib/components/extra/undraw/Undraw.svelte';

	import svg from '$docs/assets/undraw_yoga.svg?raw';
</script>

<Undraw
	{svg}
	alt="Undraw"
	colorMap={{
		'#090814': 'fill-base-950 dark:fill-accent-950',
		'#d6d6e3': 'fill-base-300 dark:fill-base-700',
		'#cacaca': 'fill-base-400 dark:fill-base-600',
		'#cfcce0': 'fill-base-500 dark:fill-base-500',
		'#f2f2f2': 'fill-base-200 dark:fill-base-800'
	}}
/>
```