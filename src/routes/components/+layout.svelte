<script lang="ts">
	import Navbar from '$lib/docs/Navbar.svelte';
	import Sidebar from '$lib/docs/Sidebar.svelte';
	import Container from '$lib/preview/Container.svelte';

	let { children } = $props();
</script>

<Navbar hasSidebar />
<Sidebar />

<Container>
	{@render children()}
</Container>
