<script lang="ts">
	import { Box, toast } from '@foxui/all';
	import { ActionButtons, ReplyButton, LikeButton, RepostButton, BookmarkButton } from '@foxui/all';

	let liked = $state(false);
	let bookmarked = $state(false);
	let likeCount = $state(420);

	let liked2 = $state(false);
	let likeCount2 = $state(99);
	let bookmarked2 = $state(false);
</script>

<Box class="not-prose relative flex min-h-24 w-full flex-col gap-8">
	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">ActionButtons</h3>
		<ActionButtons
			reply={{ count: 69, onclick: () => toast('Reply clicked') }}
			repost={{ count: 42, onclick: () => toast('Repost clicked') }}
			like={{
				count: likeCount,
				active: liked,
				onclick: () => {
					likeCount += liked ? -1 : 1;
					liked = !liked;
				}
			}}
			bookmark={{
				active: bookmarked,
				onclick: () => {
					bookmarked = !bookmarked;
				}
			}}
		/>
	</div>

	<div>
		<h3 class="text-base-600 dark:text-base-400 mb-2 text-sm font-medium">Individual Buttons</h3>
		<div class="text-base-500 dark:text-base-400 flex gap-8">
			<ReplyButton count={5} onclick={() => toast('Reply')} />
			<RepostButton count={12} onclick={() => toast('Repost')} />
			<LikeButton count={likeCount2} active={liked2} onclick={() => {
				likeCount2 += liked2 ? -1 : 1;
				liked2 = !liked2;
			}} />
			<BookmarkButton active={bookmarked2} onclick={() => {
				bookmarked2 = !bookmarked2;
			}} />
		</div>
	</div>
</Box>
