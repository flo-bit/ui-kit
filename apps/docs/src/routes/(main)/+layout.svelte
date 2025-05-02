<script lang="ts">
	import Navbar from '$lib/site-components/Navbar.svelte';
	import Sidebar from '$lib/site-components/Sidebar.svelte';
	import Container from '$lib/site-components/Container.svelte';

	let { children } = $props();
</script>

<Navbar hasSidebar showLogo={false} />
<Sidebar />

<Container id="content">
	{@render children()}
</Container>
