<script>
	import { ChevronDown } from '@foxui/all/icons';
</script>

<div class="text-base-900 dark:text-base-100 w-full text-sm">
	<div class="flex items-center justify-between font-semibold">
		<span>Accordion Item A</span>
		<ChevronDown size={20} strokeWidth={1.5} class="rotate-180" />
	</div>
	<div
		class="text-base-500 dark:text-base-400 border-base-200 dark:border-base-900 mt-2 border-b pb-4 text-sm"
	>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
	</div>

	<div class="mt-4 flex items-center justify-between font-semibold">
		<span>Accordion Item B</span>
		<ChevronDown size={20} strokeWidth={1.5} />
	</div>
</div>
