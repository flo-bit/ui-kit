<script>
	import cute from '$lib/assets/images/cute.webp';
	import { Image } from '@foxui/all';
</script>

<Image
	src={cute}
	alt="Another cute animal"
	class="max-h-full max-w-full object-cover"
	containerClasses="border-base-300 dark:border-base-700 overflow-hidden rounded-ui border rounded-ui overflow-hidden"
	useThemeColor
/>
