<script lang="ts">
	import { Box } from '@fuxui/base';
	import { PlainTextEditor } from '@fuxui/text';

	let content = $state('');
</script>

<Box class="not-prose text-lg font-semibold">
	<PlainTextEditor bind:value={content} placeholder="Write something..." />
</Box>

