<script>
	import { base } from '$app/paths';
	import ThemeToggle from '$lib/components/base/theme-toggle/ThemeToggle.svelte';
	import Dock from '$lib/components/extra/dock/Dock.svelte';
	import BlogEntry from '$lib/components/social/blog-entry/BlogEntry.svelte';
	import UserProfile from '$lib/components/social/user-profile/UserProfile.svelte';
	import Posts from './Posts.svelte';
</script>

<!-- 
<UserProfile profile={{
	banner: "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	displayName: "Ricardo Cooper",
	handle: "ricardo.cooper"
}} /> -->

<!-- <div class="mx-auto flex flex-col max-w-4xl gap-16 py-24 px-4">
	<BlogEntry
		title="Hello there"
		description="This is a test post with a very long description<br /> that just<br /> goes on and on and never really stops but that's just the way it is and there is nothing really you can do about it i am very very sorry but what can i say? sometimes the world just is like that."
		href="#"
		date={new Date()}
		image={base + '/opengraph.png'}
	/>

	<BlogEntry
	title="Hello there"
	description="This is a test post with a very long description<br /> that just<br /> goes on and on and never really stops but that's just the way it is and there is nothing really you can do about it i am very very sorry but what can i say? sometimes the world just is like that."
	href="#"
	date={new Date()}
	tags={[
		'hello', 'this', 'is', 'test'
	]}
	
	image={base + '/opengraph.png'}
/>
</div> -->

<Dock />

<ThemeToggle class="absolute top-4 right-4" />

<Posts />
