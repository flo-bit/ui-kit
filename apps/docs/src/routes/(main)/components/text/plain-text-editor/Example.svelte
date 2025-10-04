<script lang="ts">
	import { Box } from '@foxui/core';
	import { PlainTextEditor } from '@foxui/text';

	let content = $state('');
</script>

<Box class="not-prose text-lg font-semibold">
	<PlainTextEditor bind:value={content} placeholder="Write something..." />
</Box>

