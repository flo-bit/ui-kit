<script>
	import { Button } from '@foxui/all';
</script>

<div
	class="bg-base-50 dark:bg-base-900 border-base-200/80 dark:border-base-800 relative flex w-full flex-col gap-2 rounded-2xl border px-4 py-3"
>
	<div class="text-base-900 dark:text-base-100 text-lg font-semibold">Title</div>
	<div class="text-base-600 dark:text-base-400 text-sm">Description</div>

	<div class="mt-4 flex flex-row items-center justify-end gap-2">
		<Button class={'order-last'} variant={'primary'} tabindex={-1}>Yes</Button>
		<Button variant={'secondary'} tabindex={-1}>No</Button>
	</div>

	<div
		class="text-base-900 dark:text-base-500 hover:text-base-800 dark:hover:text-base-200 hover:bg-base-200 dark:hover:bg-base-800 focus:outline-base-900 dark:focus:outline-base-50 focus:bg-base-200 dark:focus:bg-base-800 focus:text-base-800 dark:focus:text-base-200 absolute top-2 right-2 cursor-pointer rounded-xl p-1 transition-colors focus:outline-2 focus:outline-offset-2"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
			<path
				fill-rule="evenodd"
				d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
				clip-rule="evenodd"
			/>
		</svg>

		<span class="sr-only">Close</span>
	</div>
</div>
