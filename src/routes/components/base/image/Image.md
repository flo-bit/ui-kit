<script>
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import ImageContainer from '$lib/components/base/image-container/ImageContainer.svelte';
	import Text from '$lib/components/base/text/Text.svelte';

	import cute from '$docs/assets/images/cute.jpg?as=run';
	import cute2 from '$docs/assets/images/cute2.jpg?as=run';
</script>

# Image

## Examples

<ImageContainer src={cute} alt="Such a cute animal" containerClasses="not-prose max-w-64" />

Overlay theme color:

<ImageContainer src={cute2} alt="Another cute animal" useThemeColor={true} containerClasses="max-w-44 not-prose" />

Show normal image on hover:

<ImageContainer
	src={cute2}
	alt="Another cute animal"
	useThemeColor={true}
	containerClasses="max-w-44 not-prose"
	showNormalOnHover={true}
/>

## Usage

```svelte
<script>
	import { ImageContainer } from 'fuchs';
</script>

<ImageContainer src="/image.jpg" alt="Alt tag" />

<ImageContainer src="/image.jpg" alt="Alt tag" useThemeColor showNormalOnHover />
```
