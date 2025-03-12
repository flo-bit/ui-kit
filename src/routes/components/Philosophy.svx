<script>
	import { Alert } from '$lib/components/base/alert';
</script>

<Alert title="Work in progress" class="mb-8 not-prose" type="warning" variant="default">
	<span>
		This ui kit is still under development. Not really ready to be used yet. Public alpha coming soon.
	</span>
</Alert>

# Philosophy

This ui kit's main aim is to help you build webapps that look good very fast.

It's not designed to be super customizable, but instead offers you a
bunch of good-looking-by-default components.

Still all apps looking the same is kinda boring, so there are some easy and quick ways to customize all components.

The main idea is having two colors:

- base color (usually one of the 5 tailwind gray tones)
- accent color (usually one of the not-gray tailwind colors)

Set those colors in your `app.css` file like so:

```css
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