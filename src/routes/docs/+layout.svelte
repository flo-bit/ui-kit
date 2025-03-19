<script lang="ts">
	import Navbar from '$docs/site-components/Navbar.svelte';
	import Sidebar from '$docs/site-components/Sidebar.svelte';
	import Container from '$docs/site-components/Container.svelte';
	import { Button } from '$lib';

	let { children } = $props();
</script>

<Button class="fixed bottom-4 right-4 z-[1000]" onclick={() => {
	// go to id content
	window.location.href = '#content';
}}>
	skip to content
</Button>

<Navbar hasSidebar showLogo={false} />
<Sidebar />

<Container id="content">
	{@render children()}
</Container>
