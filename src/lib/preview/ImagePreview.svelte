<script>
	import cute from '$lib/assets/cute.jpg?as=run';
	import cute2 from '$lib/assets/cute2.jpg?as=run';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import ImageContainer from '$lib/components/image-container/ImageContainer.svelte';
	import Text from '$lib/components/text/Text.svelte';
</script>

<Subheading class="mb-4">Images</Subheading>

<ImageContainer src={cute} alt="Such a cute animal" />

<Text class="mt-4">Overlay theme color</Text>
<ImageContainer src={cute2} alt="Another cute animal" useThemeColor={true} class="max-w-64" />

<Text class="mt-4">Show normal image on hover</Text>
<ImageContainer
	src={cute2}
	alt="Another cute animal"
	useThemeColor={true}
	class="max-w-64"
	showNormalOnHover={true}
/>
