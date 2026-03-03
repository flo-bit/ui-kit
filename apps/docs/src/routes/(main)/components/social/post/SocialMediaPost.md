<script lang="ts">
	import PostExample from './Example.svelte';
	import BlueskyExample from './Example-bluesky.svelte';
</script>

# Social Media Post

## Example

<PostExample />

## Usage

```svelte
<script lang="ts">
	import { Post } from '@foxui/social';
</script>

<Post
	data={{
		author: {
			displayName: 'flo-bit',
			handle: 'flo-bit.dev',
			avatar: 'https://github.com/flo-bit.png',
			href: 'https://github.com/flo-bit'
		},
		createdAt: new Date().toISOString(),
		replyCount: 69,
		repostCount: 42,
		likeCount: 420
	}}
>
	Hello, world!
</Post>
```

## Bluesky Posts

Live posts loaded from the Bluesky API:

<BlueskyExample />
