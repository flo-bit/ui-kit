<script>
	import { base } from '$app/paths';
	import { Button, Badge, Subheading } from '@fuxui/base';
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
	<div class="flex gap-2">
		<Badge size="md" class="mt-16" variant="secondary">svelte 5</Badge>
		<Badge size="md" class="mt-16" variant="secondary">tailwind 4</Badge>
		<Badge size="md" class="mt-16" variant="secondary">ui kit</Badge>
	</div>
	<h1
		class="text-base-950 dark:text-base-50 md:leading-14 mb-4 max-w-2xl text-pretty text-4xl font-bold tracking-tight md:text-5xl"
	>
		Build Beautiful Apps & Websites Fast
	</h1>
	
	{#if dev}
		<Badge class="fixed bottom-1 left-1">
			{count} components
		</Badge>
	{/if}

	<div class="mb-16 flex gap-2">
		<Button href={base + '/docs/quick-start'} class="mb-8">Quick Start</Button>
		<Button variant="link" href={base + '/docs/philosophy'} class="mb-8"
			>Learn more <span>&rarr;</span></Button
		>
	</div>

	<div class="flex flex-col gap-4">
		<Subheading>Categories</Subheading>
		<div class="flex flex-wrap gap-2">
			{#each components as component}
				<Button variant="secondary" href={'#' + component.name}>{component.name}</Button>
			{/each}
		</div>
	</div>

	<Cards />
</div>
