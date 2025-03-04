<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Text } from '$lib/components/base/text';
	import { Avatar, AvatarGroup } from '$lib/components/base/avatar';
</script>

<Subheading>Avatar</Subheading>

<Text class="mt-4 mb-2">Single Avatar</Text>

<div class="flex items-center gap-2">
	<Avatar fallback="AB" />
	<Avatar src="https://github.com/flo-bit.png" alt="flo-bit" fallback="FB" />
</div>

<Text class="mt-4 mb-2">Avatars Group</Text>

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
		},
		{
			src: 'https://github.com/huntabyte.png',
			alt: 'huntabyte',
			fallback: 'HB'
		}
	]}
/>
