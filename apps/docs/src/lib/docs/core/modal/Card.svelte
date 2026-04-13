<script>
	import { Button } from '@foxui/all';
	import { X } from '@foxui/all/icons';
</script>

<div
	class="bg-base-50 dark:bg-base-900 border-base-200/80 dark:border-base-800 relative flex w-full flex-col gap-2 rounded-ui border px-4 py-3"
>
	<div class="text-base-900 dark:text-base-100 text-lg font-semibold">Title</div>
	<div class="text-base-600 dark:text-base-400 text-sm">Description</div>

	<div class="mt-4 flex flex-row items-center justify-end gap-2">
		<Button class={'order-last'} variant={'primary'} tabindex={-1}>Yes</Button>
		<Button variant={'secondary'} tabindex={-1}>No</Button>
	</div>

	<div
		class="text-base-900 dark:text-base-500 hover:text-base-800 dark:hover:text-base-200 hover:bg-base-200 dark:hover:bg-base-800 focus:outline-base-900 dark:focus:outline-base-50 focus:bg-base-200 dark:focus:bg-base-800 focus:text-base-800 dark:focus:text-base-200 absolute top-2 right-2 cursor-pointer rounded-ui-sm p-1 transition-colors focus:outline-2 focus:outline-offset-2"
	>
		<X size={16} strokeWidth={2} />

		<span class="sr-only">Close</span>
	</div>
</div>
