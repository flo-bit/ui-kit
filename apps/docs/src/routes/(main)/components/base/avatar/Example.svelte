<script>
	import { Avatar, AvatarGroup } from '@foxui/core';
</script>

<h3>Single Avatar</h3>

<div class="not-prose flex items-center gap-2">
	<Avatar fallback="AB" />
	<Avatar />
	<Avatar src="https://github.com/flo-bit.png" alt="flo-bit" fallback="FB" />
</div>

<h3>Avatars Group</h3>

<AvatarGroup
	users={[
		{
			src: 'https://github.com/flo-bit.png',
			alt: 'flo-bit',
			fallback: 'FB'
		},
		{
			src: 'https://github.com/rich-harris.png',
			alt: 'rich-harris'
		},
		{
			src: 'https://github.com/huntabyte.png',
			alt: 'huntabyte'
		},
		{
			fallback: '+5'
		}
	]}
	class="not-prose"
/>
