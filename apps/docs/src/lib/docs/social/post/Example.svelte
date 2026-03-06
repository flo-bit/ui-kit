<script lang="ts">
	import { Box, toast } from '@foxui/all';
	import { Post } from '@foxui/all';

	let liked = $state(false);
	let bookmarked = $state(false);
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
			likeCount: 420,
		}}
		onReplyClick={() => {
			toast('You clicked on reply');
		}}
		onRepostClick={() => {
			toast('You clicked on repost');
		}}
		onLikeClick={() => {
			liked = !liked;
		}}
		liked={liked}
		onBookmarkClick={() => {
			bookmarked = !bookmarked;
		}}
		bookmarked={bookmarked}
	>
		Hello, world!
	</Post>
</Box>
