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

## 2. Install the core fox ui components by running:

```bash
npm install @foxui/core
```

## 3. Set up your `app.css`

Add the following to your `app.css` to import the theme (which includes the base/accent color system and all color classes):

```css
@custom-variant dark (&:is(.dark *));

@import '@foxui/core/theme.css';

@source "../node_modules/@foxui";
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

Fox UI is split into multiple subpackages to minimize both the bundle size as well as the amount of dependencies.
Simply install a package when you need it, or you can install all of them with:

```bash
npm install @foxui/core @foxui/3d @foxui/colors @foxui/social @foxui/text @foxui/time @foxui/visual
```

### Dark mode

This ui kit is designed to be used in both light and dark mode, and can be used in the following ways:

1. light mode only (default), for dark mode only, add the `dark` class to the `html` element in your app.

2. Allow users to switch between modes using the [\<ThemeToggle /\>](/ui-kit/components/core/theme-toggle) component (before being pressed will default mode to system settings).

3. automatically chooses the mode based on the system settings, simply remove the following from your app.css:

```css
@custom-variant dark (&:is(.dark *));
```
