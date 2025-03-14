<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Text } from '$lib/components/base/text';
	import { Avatar, AvatarGroup } from '$lib/components/base/avatar';
</script>

# Avatar

## Examples

Single Avatar

<div class="flex items-center gap-2">
	<Avatar fallback="AB" />
	<Avatar />
    <Avatar src="https://github.com/flo-bit.png" alt="flo-bit" fallback="FB" class="not-prose" />
</div>

Avatars Group

<AvatarGroup
users={[
{
src: 'https://github.com/flo-bit.png',
alt: 'flo-bit',
fallback: 'FB'
},
{
src: 'https://github.com/rich-harris.png',
alt: 'rich-harris',
},
{
src: 'https://github.com/huntabyte.png',
alt: 'huntabyte',
},
{
fallback: '+5'
}
]}
class="not-prose"
/>

## Usage

```svelte
<script>
	import { Avatar, AvatarGroup } from 'fox-ui-svelte';
</script>

<Avatar src="https://github.com/flo-bit.png" alt="flo-bit" fallback="FB" />

<AvatarGroup
	users={[
		{
			src: 'https://github.com/flo-bit.png',
			alt: 'flo-bit',
			fallback: 'FB'
		},
		{
			src: 'https://github.com/rich-harris.png',
			alt: 'rich-harris',
			fallback: 'RH'
		}
	]}
/>
```
