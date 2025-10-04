<script lang="ts">
	import { Box } from '@foxui/all';
	import { PlainTextEditor } from '@foxui/all';

	let content = $state('');
</script>

<Box class="not-prose text-lg font-semibold">
	<PlainTextEditor bind:value={content} placeholder="Write something..." />
</Box>

