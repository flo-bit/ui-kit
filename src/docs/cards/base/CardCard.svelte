<script>
	import nature from '$docs/assets/images/nature2.jpg?as=run';
	import Image from '$lib/components/base/image/Image.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
</script>

<div
	class="border-base-300 bg-base-200 dark:border-base-800 dark:bg-base-900 mx-auto flex w-fit max-w-44 flex-col items-start gap-1 rounded-2xl border p-3"
>
	<Image
		src={nature}
		alt="Nature"
		class="max-h-full max-w-full object-cover"
		containerClasses="border-base-300 dark:border-base-700 overflow-hidden max-w-full max-h-20 rounded-2xl border rounded-2xl overflow-hidden"
	/>

	<Text class="mt-2 font-semibold">Card Title</Text>
	<Text class="text-xs font-normal">Card Subtitle</Text>
</div>
