<script lang="ts">
	import type { NodeViewProps } from '@tiptap/core';
	import { NodeViewWrapper } from 'svelte-tiptap';
	import type { EmbedDefinition } from './helpers';

	let props: NodeViewProps = $props();

	let embed: EmbedDefinition | undefined = $derived(
		(props.editor.storage.embedExtension?.embeds as EmbedDefinition[] | undefined)?.find(
			(e: EmbedDefinition) => e.name === props.node.attrs.embedName
		)
	);

	let url: string = $derived(props.node.attrs.url);

	let embedData: Record<string, any> = $derived.by(() => {
		const raw = props.node.attrs.embedData;
		if (!raw) return {};
		if (typeof raw === 'string') {
			try {
				return JSON.parse(raw);
			} catch {
				return {};
			}
		}
		return raw;
	});
</script>

<NodeViewWrapper>
	{#if embed}
		{@const EmbedComponent = embed.component}
		<EmbedComponent {url} data={embedData} selected={props.selected} />
	{:else}
		<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
	{/if}
</NodeViewWrapper>
