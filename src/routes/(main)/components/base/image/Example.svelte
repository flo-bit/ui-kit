<script>
	import { ImageContainer } from '$lib';

	import cute from '$docs/assets/images/cute.jpg?as=run';
	import cute2 from '$docs/assets/images/cute2.jpg?as=run';
</script>

<ImageContainer src={cute} alt="Such a cute animal" containerClasses="not-prose max-w-64" />

<h3>Overlay theme color</h3>

<ImageContainer
	src={cute2}
	alt="Another cute animal"
	useThemeColor={true}
	containerClasses="max-w-44 not-prose"
/>

<h3>Show normal image on hover</h3>

<ImageContainer
	src={cute2}
	alt="Another cute animal"
	useThemeColor={true}
	containerClasses="max-w-44 not-prose"
	showNormalOnHover={true}
/>
