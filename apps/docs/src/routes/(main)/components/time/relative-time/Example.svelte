<script lang="ts">
	import { Box } from '@foxui/all';
	import { RelativeTime } from '@foxui/all';
</script>

<Box class="min-h-0">
	<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
</Box>
