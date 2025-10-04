<script lang="ts">
	import { Post } from '@foxui/social';
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
			createdAt: new Date(Date.now() - 10 * 1000).toISOString(),
			replyCount: 0,
			repostCount: 0,
			likeCount: 0
		}}
	/>
</div>
