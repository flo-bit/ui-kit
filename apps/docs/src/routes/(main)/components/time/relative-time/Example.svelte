<script lang="ts">
	import { Box } from '@fuxui/base';
	import { RelativeTime } from '@fuxui/time';
</script>

<Box class="min-h-0">
	<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
</Box>
