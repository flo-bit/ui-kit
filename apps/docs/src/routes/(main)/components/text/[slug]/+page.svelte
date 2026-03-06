<script lang="ts">
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';
	import { Prose } from '@foxui/all';
	import Api from '$lib/site-components/API.svelte';
	import type { Component } from 'svelte';
	import type { APISchema } from '$lib/types/schema';

	type ComponentDoc = {
		default: {
			title: string;
			docs: Component;
			example?: Component;
			card?: Component;
			api?: APISchema[];
		};
	};

	const modules = import.meta.glob('/src/lib/docs/text/*/index.ts', { eager: true }) as Record<string, ComponentDoc>;

	let slug = $derived(page.params.slug);

	let componentDoc = $derived.by(() => {
		const mod = modules[`/src/lib/docs/text/${slug}/index.ts`];
		if (!mod) error(404, 'Component not found');
		return mod.default;
	});
</script>

<Prose>
	<h1>{componentDoc.title}</h1>
	{#if componentDoc.example}
		{@const Example = componentDoc.example}
		<h2>Example</h2>
		<Example />
	{/if}
	{@const Doc = componentDoc.docs}
	<Doc />
	{#if componentDoc.api?.length}
		<h2>API Reference</h2>
		{#each componentDoc.api as schema}
			<Api props={schema} />
		{/each}
	{/if}
</Prose>
