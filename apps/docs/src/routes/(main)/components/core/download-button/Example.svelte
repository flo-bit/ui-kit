<script>
	import { base } from '$app/paths';
	import { DownloadButton } from '@foxui/all';
</script>

<DownloadButton
	title="Random image"
	description="Download this random image"
	fileUrl={base + '/test.jpg?hello=1'}
/>
