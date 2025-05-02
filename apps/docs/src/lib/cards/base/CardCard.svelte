<script>
	import { Image, Paragraph } from '@fuxui/base';

	import nature from '$lib/assets/images/nature2.jpg';
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

	<Paragraph class="mt-2 font-semibold">Card Title</Paragraph>
	<Paragraph class="text-xs font-normal">Card Subtitle</Paragraph>
</div>
