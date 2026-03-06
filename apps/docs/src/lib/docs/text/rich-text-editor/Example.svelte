<script lang="ts">
	import { Prose } from '@foxui/all';
	import { RichTextEditor } from '@foxui/all';

	let content = $state('');
</script>

<div
	class="border-base-300/50 bg-base-300/20 dark:border-base-800/50 dark:bg-base-900/30 text-base-900 dark:text-base-100 relative isolate min-h-24 w-full rounded-2xl border p-4 backdrop-blur-2xl"
>
	<Prose size="md">
		<RichTextEditor bind:content />
	</Prose>
</div>
