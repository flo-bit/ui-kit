<script lang="ts">
	import { Post } from '@foxui/all';
</script>

<div class="flex h-full w-full items-center justify-center">
	<Post
		data={{
			htmlContent: 'Hello, world!',
			author: {
				displayName: 'flo-bit',
				handle: 'flo-bit.dev',
				avatar: 'https://github.com/flo-bit.png'
			},
			createdAt: new Date(Date.now() - 10 * 1000).toISOString()
		}}
	/>
</div>
