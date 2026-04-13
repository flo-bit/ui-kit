<script lang="ts">
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';
	import { Prose } from '@foxui/all';
	import Api from '$lib/site-components/API.svelte';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
	import type { ComponentDoc } from '$lib/types/schema';

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
		<LlmsButton href={`/components/${category}/${slug}/llms.txt`} />
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
