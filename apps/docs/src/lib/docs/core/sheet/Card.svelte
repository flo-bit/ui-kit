<script>
	import { Button } from '@foxui/all';
	import { X } from '@foxui/all/icons';
</script>

<div class="absolute inset-0 h-full w-full">
	<div
		class="bg-base-100 dark:bg-base-900 border-base-200 dark:border-base-800 absolute inset-y-0 right-0 flex h-full w-28 flex-col border-l p-3 shadow-lg"
	>
		<div class="text-base-900 dark:text-base-50 mt-6 text-sm font-semibold">Are you sure</div>

		<div class="text-base-900 dark:text-base-500 absolute top-2 right-2 p-1">
			<X size={12} strokeWidth={2} />
		</div>

		<div class="mt-8 flex flex-col gap-1.5">
			<Button variant="primary" size="sm" tabindex={-1}>Save</Button>
			<Button variant="secondary" size="sm" tabindex={-1}>Cancel</Button>
		</div>
	</div>
</div>
