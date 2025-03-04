<script>
	import { AvatarGroup } from '$lib/components/base/avatar';
</script>

<AvatarGroup
avatarClass="size-16"
	users={[
		{
			src: 'https://github.com/flo-bit.png',
			alt: 'flo-bit',
			fallback: 'FB'
		},
		{
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
