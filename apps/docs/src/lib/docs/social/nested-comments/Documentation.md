## Usage

```svelte
<script>
	import { NestedComments } from '@foxui/social';

	const comments = [
		{
			author: { displayName: 'Alice', handle: 'alice', avatar: '...' },
			htmlContent: '<p>Great post!</p>',
			createdAt: new Date().toISOString(),
			replyCount: 1,
			likeCount: 5,
			replies: [
				{
					author: { displayName: 'Bob', handle: 'bob', avatar: '...' },
					htmlContent: '<p>I agree!</p>',
					createdAt: new Date().toISOString(),
					replyCount: 0,
					likeCount: 2
				}
			]
		}
	];
</script>

<NestedComments {comments} />
```

## Features

- Collapsible threads — click the left border or avatar to collapse/expand
- Recursive nesting up to 5 levels deep
- Relative timestamps
- Reply and like counts
- Supports embeds (images, videos, links) on each comment
