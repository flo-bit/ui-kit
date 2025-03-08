<script>
	import { base } from '$app/paths';
	import { Button } from '$lib/components/base/button';
	import Cards from '$lib/docs/Cards.svelte';
	import Navbar from '$lib/docs/Navbar.svelte';
	import Sidebar from '$lib/docs/Sidebar.svelte';
</script>

<Navbar />
<Sidebar mobileOnly />

<div class="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-2 px-8 py-24">
	<h1
		class="text-base-950 dark:text-base-50 my-8 mt-8 max-w-2xl text-4xl font-bold tracking-tight text-pretty md:text-5xl md:leading-14"
	>
		Easy to use UI components built with Tailwind and Svelte
	</h1>

	<Button href={base + "/components"} class="mb-8">All Components <span>&rarr;</span></Button>

	<Cards />
</div>
