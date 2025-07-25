<script lang="ts">
	import GithubCornerExample from './Example.svelte';
</script>

# Social Media Post

## Example

<GithubCornerExample />

## Usage

```svelte
<script lang="ts">
	import { Post } from '@fuxui/social';
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
