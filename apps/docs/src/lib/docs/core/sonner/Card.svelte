<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '@foxui/all';
	import { TriangleAlert } from '@foxui/all/icons';
</script>

<div class="flex h-full w-full items-end justify-end">
	<Alert class="ml-10">
		<TriangleAlert size={24} strokeWidth={2} />

		<AlertTitle class="text-rose-500 dark:text-rose-500">Attention required</AlertTitle>
		<AlertDescription>This is important</AlertDescription>
	</Alert>
</div>
