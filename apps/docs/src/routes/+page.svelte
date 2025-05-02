<script>
	import { base } from '$app/paths';
	import { Button } from '@fuxui/base';
	import Cards from '$lib/site-components/Cards.svelte';
	import Navbar from '$lib/site-components/Navbar.svelte';
	import Sidebar from '$lib/site-components/Sidebar.svelte';
	import { components } from '$lib/site-components/components_all';

	let count = components.flatMap((c) => c.components).length;
</script>

<Navbar />
<Sidebar mobileOnly />

<div class="mx-auto flex w-full max-w-6xl flex-col items-start justify-center gap-8 px-8 py-24">
	<h1
		class="text-base-950 dark:text-base-50 mt-16 mb-4 max-w-2xl text-4xl font-bold tracking-tight text-pretty md:text-5xl md:leading-14"
	>
		{count} UI components built with Tailwind 4 and Svelte 5
	</h1>

	<div class="mb-16 flex gap-2">
		<Button href={base + '/docs/quick-start'} class="mb-8">Quick Start</Button>
		<Button variant="link" href={base + '/docs/philosophy'} class="mb-8"
			>Learn more <span>&rarr;</span></Button
		>
	</div>

	<Cards />
</div>
