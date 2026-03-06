<script lang="ts">
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';
	import { Prose, Button } from '@foxui/all';
	import Api from '$lib/site-components/API.svelte';
	import type { ComponentDoc } from '$lib/types/schema';
	import { resolve } from '$app/paths';

	type ModuleEntry = {
		default: ComponentDoc;
	};

	const modules = import.meta.glob('/src/lib/docs/*/*/index.ts', { eager: true }) as Record<
		string,
		ModuleEntry
	>;

	let category = $derived(page.params.category);
	let slug = $derived(page.params.slug);

	let componentDoc = $derived.by(() => {
		const mod = modules[`/src/lib/docs/${category}/${slug}/index.ts`];
		if (!mod) error(404, 'Component not found');
		return mod.default;
	});
</script>

<Prose>
	<div class="flex items-end gap-4">
		<h1 class="my-0!">{componentDoc.title}</h1>
		<Button
			size="sm"
			class="not-prose mb-1"
			variant="secondary"
			href={resolve(`/components/${category}/${slug}/llms.txt`)}
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"
				/><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="m5 16-3 3 3 3" /><path
					d="m9 22 3-3-3-3"
				/></svg
			>
			<span>llms.txt</span>
		</Button>
	</div>
	{#if componentDoc.example}
		{@const Example = componentDoc.example}
		<h2>Example</h2>
		<Example />
	{/if}
	{@const Doc = componentDoc.docs}
	<Doc />
	{#if componentDoc.api?.length}
		<h2>API Reference</h2>
		{#each componentDoc.api as schema (schema.title)}
			<Api props={schema} />
		{/each}
	{/if}
</Prose>
