<script lang="ts">
	import Navbar from '$docs/site-components/Navbar.svelte';
	import Sidebar from '$docs/site-components/Sidebar.svelte';
	import Container from '$docs/site-components/Container.svelte';

	let { children } = $props();
</script>

<Navbar hasSidebar showLogo={false} />
<Sidebar />

<Container id="content">
	{@render children()}
</Container>
