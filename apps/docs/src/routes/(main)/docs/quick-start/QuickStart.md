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
npm install @fuxui/base
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
	import { Button } from '@fuxui/base';
</script>

<Button>Click me</Button>
```
