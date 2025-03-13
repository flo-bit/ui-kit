<script lang="ts">
	import Navbar from '$docs/site-components/Navbar.svelte';
	import Sidebar from '$docs/site-components/Sidebar.svelte';
	import Container from '$docs/preview/Container.svelte';

	let { children } = $props();
</script>

<Navbar hasSidebar />
<Sidebar />

<Container>
	{@render children()}
</Container>
