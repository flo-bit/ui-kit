# my ui kit

>[!WARNING]
> This is a work in progress and not ready to be used yet.

svelte v5 + tailwind v4

See all components here: https://flo-bit.dev/ui-kit

## Quickstart

**Work in progress, only for testing purposes**

### 1. Create a new svelte project with tailwind css (including `@tailwindcss/typography` and `@tailwindcss/forms` plugins)

```bash
npx sv create my-project
```

### 2. Install fox-ui-svelte

```bash
npm install fox-ui-svelte
```

### 3. set theme variables in your app.css (changing `gray` and `blue` to your preferred colors, using find and replace).

```css
@source "../node_modules/fox-ui-svelte";

@theme {
	--color-base-50: var(--color-gray-50);
	--color-base-100: var(--color-gray-100);
	--color-base-200: var(--color-gray-200);
	--color-base-300: var(--color-gray-300);
	--color-base-400: var(--color-gray-400);
	--color-base-500: var(--color-gray-500);
	--color-base-600: var(--color-gray-600);
	--color-base-700: var(--color-gray-700);
	--color-base-800: var(--color-gray-800);
	--color-base-900: var(--color-gray-900);
	--color-base-950: var(--color-gray-950);

	--color-accent-50: var(--color-blue-50);
	--color-accent-100: var(--color-blue-100);
	--color-accent-200: var(--color-blue-200);
	--color-accent-300: var(--color-blue-300);
	--color-accent-400: var(--color-blue-400);
	--color-accent-500: var(--color-blue-500);
	--color-accent-600: var(--color-blue-600);
	--color-accent-700: var(--color-blue-700);
	--color-accent-800: var(--color-blue-800);
	--color-accent-900: var(--color-blue-900);
	--color-accent-950: var(--color-blue-950);
}
```

### 4. Use the components

```svelte
<script>
	import { Button } from 'fox-ui-svelte';
</script>
```


If you want to use the image component, add the plugin to your vite config

```ts
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [sveltekit(), imagetools()]
});
```
