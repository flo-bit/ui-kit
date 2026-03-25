<script lang="ts">
	import { NestedComments, type PostData } from '@foxui/all';

	const comments: PostData[] = [
		{
			author: { displayName: 'Alice', handle: 'alice.bsky.social', avatar: 'https://i.pravatar.cc/100?u=alice' },
			htmlContent: 'This is awesome!',
			createdAt: new Date(Date.now() - 3600000).toISOString(),
			replyCount: 1,
			likeCount: 12,
			replies: [
				{
					author: { displayName: 'Bob', handle: 'bob.bsky.social', avatar: 'https://i.pravatar.cc/100?u=bob' },
					htmlContent: 'Totally agree',
					createdAt: new Date(Date.now() - 1800000).toISOString(),
					replyCount: 0,
					likeCount: 3
				}
			]
		}
	];
</script>

<div class="flex h-full w-full items-center justify-center overflow-hidden">
	<NestedComments
		{comments}
		actions={(c) => ({
			reply: { count: c.replyCount },
			like: { count: c.likeCount }
		})}
	/>
</div>
