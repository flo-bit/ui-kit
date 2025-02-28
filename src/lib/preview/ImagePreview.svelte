<script>
	import cute from '$lib/assets/cute.jpg?as=run';
	import cute2 from '$lib/assets/cute2.jpg?as=run';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Image from '$lib/components/image/Image.svelte';
	import Text from '$lib/components/text/Text.svelte';
</script>

<Subheading class="mb-4">Images</Subheading>

<Image src={cute} alt="Such a cute animal" />


<Text class="mt-4">Overlay theme color</Text>
<Image src={cute2} alt="Another cute animal" useThemeColor={true} class="max-w-64" />
