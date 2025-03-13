<script>
	import { base } from '$app/paths';
	import { Alert } from '$lib/components/base/alert';
	import { Button } from '$lib/components/base/button';
	import Cards from '$docs/site-components/Cards.svelte';
	import Navbar from '$docs/site-components/Navbar.svelte';
	import Sidebar from '$docs/site-components/Sidebar.svelte';
</script>

<Navbar />
<Sidebar mobileOnly />

<div class="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-2 px-8 py-24">
	<Alert title="Work in progress" class=" w-fit" type="warning" variant="default">
		<span>
			This ui kit is still under development. Not ready to be used yet. Public alpha coming soon.
		</span>
	</Alert>

	<h1
		class="text-base-950 dark:text-base-50 my-8 mt-8 max-w-2xl text-4xl font-bold tracking-tight text-pretty md:text-5xl md:leading-14"
	>
		Beautiful UI components built with Tailwind 4 and Svelte 5
	</h1>

	<div class="flex gap-2">
		<Button href={base + '/docs/quick-start'} class="mb-8">Quick Start</Button>
		<Button variant="link" href={base + '/docs/philosophy'} class="mb-8">Learn more <span>&rarr;</span></Button>
	</div>
	<Cards />
</div>
