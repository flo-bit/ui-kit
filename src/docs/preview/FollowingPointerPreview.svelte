<script>
	import Box from '$lib/components/base/box/Box.svelte';
	import { Button } from '$lib/components/base/button';
	import FollowingPointer from '$lib/components/extra/following-pointer/FollowingPointer.svelte';
</script>

<Box id="following-pointer-preview" class="min-h-96">
	<Button>Click me</Button>
</Box>

<FollowingPointer container="#following-pointer-preview" title="Your Name" />
