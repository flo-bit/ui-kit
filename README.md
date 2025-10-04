# 🦊 fox ui

> **This is a public alpha release. Expect bugs and breaking changes.**

svelte v5 + tailwind v4

[See all components here](https://flo-bit.dev/ui-kit)

Read more about [the philosophy/aim of this project here](https://flo-bit.dev/ui-kit/docs/philosophy).

## Quickstart

### 1. Create a new svelte project with tailwind css (including `@tailwindcss/typography` and `@tailwindcss/forms` plugins)

```bash
npx sv create my-project
```

### 2. Install fuchs

```bash
npm install @foxui/core
```

### 3. set theme variables in your app.css (changing `zinc` and `emerald` to your preferred colors, using find and replace).

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

### 4. Use the components

```svelte
<script>
	import { Button } from '@foxui/core';
</script>

<Button onclick={() => alert('clicked')}>Click me</Button>
```

## Development

If you want to contribute to the project, please open an issue first describing the feature you want to add.

Clone the repo, install dependencies and run the dev server

```bash
git clone https://github.com/flo-bit/ui-kit.git
cd ui-kit
pnpm install
pnpm run dev:docs
```

This ui kit is organized as a monorepo, with `apps/docs` being the documentation and the ui-kit library being split into multiple packages in `packages/`.

If you change any package (not counting the docs), please run `npx changeset` to update the version of the packages before opening a pull request.