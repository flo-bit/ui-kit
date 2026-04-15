## Usage

Render a Lottie animation. `lottie-web` is dynamically imported, so it's only downloaded when a `Lottie` component actually mounts.

### From a URL

```svelte
<Lottie src="/my-animation.json" class="aspect-video max-w-xl" />
```

### From imported JSON

Import the animation data directly (bundled as its own chunk):

```svelte
<script lang="ts">
	import animationData from './my-animation.json';
</script>

<Lottie data={animationData} />
```

> **Heads up:** if you need to hold the animation data in reactive state, use `$state.raw` (not `$state`). Lottie JSON is large and nested — Svelte's deep state proxy breaks `structuredClone`, which is used internally for `colorMap` recoloring.
>
> ```svelte
> let anim = $state.raw(animationData);
> ```

Set the size with regular classes — the underlying SVG fills the container.

### Theming colors

Swap any color baked into the Lottie JSON to match your theme. Keys are the source colors in the animation, values are any CSS color — hex, `rgb()`, or `var(--token)`:

```svelte
<Lottie
	src="/my-anim.json"
	colorMap={{
		'#000000': 'var(--color-base-900)',
		'#ff0000': 'var(--color-accent-500)'
	}}
/>
```

CSS variables are resolved from the document's computed styles at mount.

