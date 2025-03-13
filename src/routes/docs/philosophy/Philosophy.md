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

You can try it out by setting the current theme colors in the navbar.