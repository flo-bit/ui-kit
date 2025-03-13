<script>
	import cute from '$docs/assets/images/cute.jpg?as=run';
	import Image from '$lib/components/base/image/Image.svelte';
</script>

<Image
	src={cute}
	alt="Another cute animal"
	class="max-h-full max-w-full object-cover"
	containerClasses="border-base-300 dark:border-base-700 overflow-hidden rounded-2xl border rounded-2xl overflow-hidden"
	useThemeColor
/>
