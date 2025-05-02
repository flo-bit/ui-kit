<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '@fuxui/base';
</script>

<div class="flex h-full w-full items-end justify-end">
	<Alert class="ml-10">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				fill-rule="evenodd"
				d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
				clip-rule="evenodd"
			/>
		</svg>

		<AlertTitle class="text-rose-500 dark:text-rose-500">Attention required</AlertTitle>
		<AlertDescription>This is important</AlertDescription>
	</Alert>
</div>
