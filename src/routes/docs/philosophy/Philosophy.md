<script>
	import PublicAlphaAlert from '$docs/site-components/PublicAlphaAlert.svelte';
</script>

# Philosophy

<PublicAlphaAlert />

## Build apps fast

This ui kit's main aim is to help you build webapps that look good very fast.

It's not designed to be super customizable, but instead offers you a
bunch of good-looking-by-default components.

## Two colors

Still all apps looking the same is kinda boring, so there are is one easy and quick way to customize all components.

The main idea is having two colors (in all tailwind shades from 50 up to 950):

- base color (usually one of the 5 tailwind gray tones)
- accent color (usually one of the not-gray tailwind colors)

You can try it out by setting the current theme colors in the navbar for this documentation site.

## Copying components vs installing packages

I'm a big fan of the philosophy of copying components (shadcn-style) for better customization, 
but also I think the quickest way to build something is to just install the package and use it.

So the plan is to have both options (currently only installing as a package is available, 
but you can copy what you need from the [source code](https://github.com/flo-bit/ui-kit/tree/main/src/lib/components/base) 
though some imports might need to be adjusted).

## Lots of components

While currently only the base and some extra components are visible, there are lots of components in the pipeline.
The aim is to have a component library that has lots of components that are useful for building 
webapps/websites/games, all in a consistent style/theme.

See here for a few examples of work in progress components (some may be partially broken):

### graphs

- [ring chart](/ui-kit/components/graphs/ring-chart/)
- [heatmap](/ui-kit/components/graphs/heatmap/)
- [line chart](/ui-kit/components/graphs/line-graph/)

### extras

- [quote](/ui-kit/components/extras/quote/)
- [phone](/ui-kit/components/extras/phone/)
- [timer](/ui-kit/components/extras/timer/)

### social

- [github-corner](/ui-kit/components/social/github-corner/)
- [star rating](/ui-kit/components/social/star-rating/)
- [social media post](/ui-kit/components/social/post/)

### 3d

- [depth 3d](/ui-kit/components/3d/depth-3d/)
- [model-picker](/ui-kit/components/3d/model-picker/)
- [voxel-art](/ui-kit/components/3d/voxel-art/)

## Works without javascript when possible & is accessible

Whenever possible components should work without javascript. 
Also all components should be accessible (to the best of my knowledge). 
Please let me know [if you find any issues there](https://github.com/flo-bit/ui-kit/issues).

## Dark mode

This ui kit is designed to be used in both light and dark mode 
(and switch automatically depending on system settings).
If you want to disable dark mode, add the following to your app.css:

```css
@custom-variant dark (&:is(.dark *));
```

Similarly you can disable light mode:

1. Add the above code to your app.css
2. Add the `dark` class to the `html` element in your app.

## Contributing/Feedback

If you have any suggestions for components or feedback in general, please open an issue on [github](https://github.com/flo-bit/ui-kit/issues).

Also feel free to contribute yourself, preferably by first opening an issue about the component/feature you want to add!

You can also reach me on [bluesky](https://bsky.app/profile/flo-bit.dev).

## Credits

This ui kit is largely based on [bits-ui](https://bits-ui.com/).