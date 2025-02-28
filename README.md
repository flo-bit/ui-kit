[![hero2](https://github.com/user-attachments/assets/2573273f-573b-44bf-8e2d-f0d1c261b79f)](https://flo-bit.dev/ui-kit)

# my ui kit

svelte v5 + tailwind v4

demo: https://flo-bit.dev/ui-kit

## How to use

**Work in progress, only for testing purposes**

1. setup a new svelte project with tailwind

2. install the main dependencies

```bash
npm install bits-ui tailwind-variants @tailwindcss/forms @tailwindcss/typography @zerodevx/svelte-img
```

3. if you want to use the image component, add the plugin to your vite config

```ts
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
	plugins: [sveltekit(), imagetools()]
});
```

4. set theme variables in your app.css (changing `gray` and `blue` to your preferred colors, using find and replace) and add the tailwind plugins

```css
@plugin '@tailwindcss/typography';
@plugin '@tailwindcss/forms';

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

5. copy `src/lib/utils.ts` to your projects lib folder (has to be exactly this name and path)

6. copy components from `src/lib/components` to your project

Some components might need additional dependencies, just install once you get an error, or install all of them at once:

```bash
npm install bits-ui tailwind-variants @tailwindcss/forms @tailwindcss/typography layerchart plyr svelte-sonner tailwindcss-animate three @threlte/extras @threlte/core @types/three @zerodevx/svelte-img
```

again tailwind plugins should be added to your `app.css`

```css
// [other plugins...]
@plugin 'tailwindcss-animate';
```
