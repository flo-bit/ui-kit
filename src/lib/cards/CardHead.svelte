<script>
	import Text from '$lib/components/base/text/Text.svelte';
</script>

<div
	class="border-base-300 dark:border-base-800 from-base-300/50 dark:from-base-900/50 rounded-t-xl border bg-gradient-to-b via-transparent pt-2 mx-2"
>
	<div class="flex items-center gap-2 px-2">
		<div class="size-3 rounded-full border border-red-500 bg-red-500/80"></div>
		<div class="size-3 rounded-full border border-yellow-500 bg-yellow-500/80"></div>
		<div class="size-3 rounded-full border border-green-500 bg-green-500/80"></div>
		<div class="px-2">
			<div
				class="border-base-300 dark:border-base-800 from-base-300/50 dark:from-base-900/50 -mb-0.25 flex w-full items-center gap-2 rounded-t-2xl border bg-gradient-to-b via-transparent px-3 pt-2 pb-1"
			>
				🫠
				<Text class="text-base-900 dark:text-base-50 line-clamp-1 font-semibold">Website Title</Text
				>
			</div>
		</div>
	</div>

</div>