<script>
	import PublicAlphaAlert from '$lib/site-components/PublicAlphaAlert.svelte';
</script>

# Philosophy

<PublicAlphaAlert />

## Build apps fast

This ui kit's main aim is to help you build webapps that look good very fast.

It's not designed to be super customizable, but instead offers you a
bunch of good-looking-by-default components that are as easy to use as possible.

## Two colors

Still all apps looking the same is kinda boring, so there is one easy and quick way to customize all components.

The main idea is having two colors (in all tailwind shades from 50 up to 950):

- base color (usually one of the 5 tailwind gray tones)
- accent color (usually one of the not-gray tailwind colors)

You can try it out by setting the current theme colors in the navbar for this documentation site.

## Copying components vs installing packages

I'm a big fan of the philosophy of copying components (shadcn-style) for better customization,
but also I think the quickest way to build something is to just install the package and use it.

So the plan is to have both options (usually you start by just using the package and if you
eventually need to customize a component you add it to your project),
currently the only way to use it is installing as a package,
but a cli tool is in the works.

## Lots of components

Contrary to other component libraries that offer only some base components and expect you to built the rest,
this library is aiming to have a component library that has lots of different components that are
useful for building webapps/websites/games, all in a consistent style/theme.

Scroll down the sidebar or main page for examples of specialised components (section `Color`, `Extra` and `3D` components)

If you have a suggestion for a new component, please open an issue on [github](https://github.com/flo-bit/ui-kit/issues).

## Works without javascript when possible & is accessible

Whenever possible components should work without javascript.
Also all components should be accessible (to the best of my knowledge).
Please let me know [if you find any issues there](https://github.com/flo-bit/ui-kit/issues).

### Dark mode

This ui kit is designed to be used in both light and dark mode, and can be used in the following ways:

1. light mode only (default), for dark mode only, add the `dark` class to the `html` element in your app.

2. Allow users to switch between modes using the [\<ThemeToggle /\>](/ui-kit/components/core/theme-toggle) component (before being pressed will default mode to system settings).

3. automatically chooses the mode based on the system settings, simply remove the following from your app.css:

```css
@custom-variant dark (&:is(.dark *));
```

## Contributing/Feedback

If you have any suggestions for components or feedback in general, please open an issue on [github](https://github.com/flo-bit/ui-kit/issues).

Also feel free to contribute yourself, preferably by first opening an issue about the component/feature you want to add!

You can also reach me on [bluesky](https://bsky.app/profile/flo-bit.dev).

## Credits

The base components of this ui kit are largely based on [bits-ui](https://bits-ui.com/) and I've taken lots of inspiration
from [shadcn-svelte](https://www.shadcn-svelte.com/).
