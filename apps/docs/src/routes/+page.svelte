<script>
	import { base } from '$app/paths';
	import { Button, Badge, Subheading } from '@foxui/core';
	import Cards from '$lib/site-components/Cards.svelte';
	import Navbar from '$lib/site-components/Navbar.svelte';
	import Sidebar from '$lib/site-components/Sidebar.svelte';
	import { components } from '$lib/site-components/components_all';
	import { dev } from '$app/environment';

	let count = components.flatMap((c) => c.components).length;
</script>

<Navbar />
<Sidebar mobileOnly />

<div class="mx-auto flex w-full max-w-6xl flex-col items-start justify-center gap-8 px-8 py-24">
	<div class="flex gap-2 mt-16">
		<Badge>svelte 5</Badge>
		<Badge variant="primary_shift">tailwind 4</Badge>
		<Badge variant="secondary">ui kit</Badge>
	</div>
	<div
		class="text-base-950 dark:text-base-50 md:leading-14 mb-4 max-w-2xl text-pretty text-4xl font-bold tracking-tight md:text-5xl"
	>
		<h1>Build Beautiful Apps & Websites Fast</h1>
		<div class="text-base-700 dark:text-base-300 mt-2 text-sm font-medium tracking-normal">
			by <Button
				variant="link"
				href="https://flo-bit.dev"
				target="_blank"
				class="dark:text-accent-300 text-accent-800 px-0 font-medium">flo-bit</Button
			>
		</div>
	</div>


	<div class="mb-0 flex gap-2">
		<Button href={base + '/docs/quick-start'} class="mb-8">Quick Start</Button>
		<Button variant="link" href={base + '/docs/philosophy'} class="mb-8"
			>Learn more <span>&rarr;</span></Button
		>
	</div>

	<!-- <div class="flex flex-col gap-4">
		<div class="flex flex-wrap gap-2">
			{#each components as component}
				<Button variant="secondary" href={'#' + component.name}>{component.name}</Button>
			{/each}
		</div>
	</div> -->

	<Cards />
</div>
