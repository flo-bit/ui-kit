<script lang="ts">
	import Navbar from '$docs/site-components/Navbar.svelte';
	import Sidebar from '$docs/site-components/Sidebar.svelte';
	import Container from '$docs/site-components/Container.svelte';
	import { Button } from '$lib';

	let { children } = $props();
</script>


<Button class="fixed -top-96 left-4 z-[1000] focus-visible:top-8" href="#content">
	skip to content
</Button>


<Navbar hasSidebar showLogo={false} />
<Sidebar />

<Container id="content">
	{@render children()}
</Container>
