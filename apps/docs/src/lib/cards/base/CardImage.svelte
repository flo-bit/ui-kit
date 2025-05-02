<script>
	import cute from '$lib/assets/images/cute.jpg';
	import { Image } from '@fuxui/base';
</script>

<Image
	src={cute}
	alt="Another cute animal"
	class="max-h-full max-w-full object-cover"
	containerClasses="border-base-300 dark:border-base-700 overflow-hidden rounded-2xl border rounded-2xl overflow-hidden"
	useThemeColor
/>
