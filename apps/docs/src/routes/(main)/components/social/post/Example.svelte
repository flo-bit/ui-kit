<script lang="ts">
	import { Box } from '@fuxui/base';
	import { Post } from '@fuxui/social';
</script>

<Box class="not-prose relative flex min-h-24 w-full flex-col gap-8">
	<Post
		data={{
			author: {
				displayName: 'flo-bit',
				handle: 'flo-bit.dev',
				avatar: 'https://github.com/flo-bit.png',
				href: 'https://bsky.app/profile/flo-bit.dev'
			},
			createdAt: new Date(Date.now() - 10000).toISOString(),
			replyCount: 69,
			repostCount: 42,
			likeCount: 420
		}}
	>
		Hello, world!
	</Post>
</Box>
