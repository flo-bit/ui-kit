<script lang="ts">
	import Navbar from '$lib/site-components/Navbar.svelte';
	import Sidebar from '$lib/site-components/Sidebar.svelte';
	import Container from '$lib/site-components/Container.svelte';
	import { AddCopyCodeButtons } from '@fuxui/base';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let addButton = $state(() => {})

	afterNavigate(() => {
		addButton?.();
	});
</script>

<Navbar hasSidebar showLogo={false} />
<Sidebar />

<Container id="content">
	{@render children()}
</Container>

<AddCopyCodeButtons bind:addButton />