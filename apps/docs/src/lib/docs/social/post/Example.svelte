<script lang="ts">
	import { Box, toast } from '@foxui/all';
	import { Post } from '@foxui/all';

	let liked = $state(false);
	let bookmarked = $state(false);
	let likeCount = $state(99);
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
			createdAt: new Date(Date.now() - 10000).toISOString()
		}}
		actions={{
			reply: { count: 69, onclick: () => toast('You clicked on reply') },
			repost: { count: 42 },
			like: {
				count: likeCount,
				active: liked,
				onclick: () => {
					likeCount += liked ? -1 : 1;
					liked = !liked;
				}
			},
			bookmark: {
				active: bookmarked,
				onclick: () => {
					bookmarked = !bookmarked;
				}
			}
		}}
	>
		Hello, world!
	</Post>
</Box>
