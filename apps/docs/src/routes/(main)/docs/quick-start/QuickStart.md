<script>
	import PublicAlphaAlert from '$lib/site-components/PublicAlphaAlert.svelte';
</script>

# Quick Start

<PublicAlphaAlert />

## 1. Create a new svelte project with tailwind css

```bash
npx sv create my-project
```

Also add the `@tailwindcss/typography` and `@tailwindcss/forms` plugins.

## 2. Install fuchs

```bash
npm install @foxui/core
```

## 3. Set theme variables in your `app.css`

You can change the colors to your liking.

```css
@source "../node_modules/@fuxui";

@theme {
	--color-base-50: var(--color-zinc-50);
	--color-base-100: var(--color-zinc-100);
	--color-base-200: var(--color-zinc-200);
	--color-base-300: var(--color-zinc-300);
	--color-base-400: var(--color-zinc-400);
	--color-base-500: var(--color-zinc-500);
	--color-base-600: var(--color-zinc-600);
	--color-base-700: var(--color-zinc-700);
	--color-base-800: var(--color-zinc-800);
	--color-base-900: var(--color-zinc-900);
	--color-base-950: var(--color-zinc-950);

	--color-accent-50: var(--color-emerald-50);
	--color-accent-100: var(--color-emerald-100);
	--color-accent-200: var(--color-emerald-200);
	--color-accent-300: var(--color-emerald-300);
	--color-accent-400: var(--color-emerald-400);
	--color-accent-500: var(--color-emerald-500);
	--color-accent-600: var(--color-emerald-600);
	--color-accent-700: var(--color-emerald-700);
	--color-accent-800: var(--color-emerald-800);
	--color-accent-900: var(--color-emerald-900);
	--color-accent-950: var(--color-emerald-950);
}
```

## 4. Use a component

```svelte
<script>
	import { Button } from '@foxui/core';
</script>

<Button>Click me</Button>
```

## More info

### Subpackages

Fox ui is split into multiple subpackages. Simply install a subpackage when you need it, or you can install all of them with:

```bash
npm install @foxui/core @foxui/3d @foxui/colors @foxui/social @foxui/text @foxui/time @foxui/visual
```

### Dark mode

This ui kit is designed to be used in both light and dark mode
(and switch automatically depending on system settings).
If you want to disable dark mode, add the following to your app.css:

```css
@custom-variant dark (&:is(.dark *));
```

Similarly you can disable light mode:

1. Add the above code to your app.css
2. Add the `dark` class to the `html` element in your app.
