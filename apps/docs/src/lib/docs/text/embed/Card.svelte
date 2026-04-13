<script>
	import { Play, Link } from '@foxui/all/icons';
</script>

<div class="flex h-full w-full items-center justify-center p-4">
	<div class="w-full space-y-2">
		<div
			class="bg-base-200 dark:bg-base-700 flex h-20 w-full items-center justify-center rounded-ui-sm"
		>
			<Play size={32} strokeWidth={2} class="text-base-400" />
		</div>
		<div
			class="bg-base-200 dark:bg-base-700 flex h-5 w-full items-center gap-1.5 rounded-full px-2.5"
		>
			<Link size={10} strokeWidth={2} class="text-base-400 shrink-0" />
			<div class="bg-base-300 dark:bg-base-600 h-1.5 w-full rounded-full"></div>
		</div>
	</div>
</div>
