<script lang="ts">
	import {
		MicrobloggingPostCreator,
		createBlueskyMentionSearch,
		type MicrobloggingPostContent,
		type Embed,
		type ImageData,
		EmbedRouter,
		EmbedImage,
		Box
	} from '@foxui/all';
	import { X } from '@foxui/all/icons';
	import Avatar from '../../../../../../../packages/core/src/lib/components/avatar/Avatar.svelte';

	let content: MicrobloggingPostContent = $state({ text: '', json: { type: 'doc' } });
	type EmbedItem =
		| { type: 'image'; image: ImageData }
		| { type: 'video'; embed: Embed }
		| { type: 'link'; embed: Embed };

	let embeds: EmbedItem[] = $state([]);

	const searchMentions = createBlueskyMentionSearch();

	function removeEmbed(index: number) {
		embeds = embeds.filter((_, i) => i !== index);
	}
</script>

<Box class="not-prose gap-4">
	<div class="flex w-full gap-4">
		<Avatar src="https://github.com/flo-bit.png" />
		<MicrobloggingPostCreator
			bind:content
			{searchMentions}
			textEditorClass="max-h-48 overflow-y-scroll min-h-24"
			class="grow"
			onlinkadded={(e) => {
				if (!embeds.some((em) => em.type === 'link' && em.embed.type === 'external' && em.embed.external.href === e.href)) {
					embeds = [
						...embeds,
						{
							type: 'link',
							embed: {
								type: 'external',
								external: { href: e.href, thumb: '', title: e.text, description: '' }
							}
						}
					];
				}
			}}
			onimageadded={(files) => {
				const newEmbeds: EmbedItem[] = files.map((f) => {
					const url = URL.createObjectURL(f);
					return { type: 'image', image: { alt: f.name, thumb: url, fullsize: url } };
				});
				embeds = [...embeds, ...newEmbeds];
			}}
			onvideoadded={(files) => {
				for (const f of files) {
					const url = URL.createObjectURL(f);
					embeds = [
						...embeds,
						{
							type: 'video',
							embed: { type: 'video', video: { playlist: url, thumb: '', alt: f.name } }
						}
					];
				}
			}}
		>
			{#if embeds.length > 0}
				<div class="mt-2 flex flex-col gap-2">
					{#each embeds as item, i}
						<div class="relative">
							{#if item.type === 'image'}
								<EmbedImage image={item.image} />
							{:else}
								<EmbedRouter embed={item.embed} />
							{/if}
							<button
								type="button"
								class="bg-base-900/60 hover:bg-base-900/80 absolute top-2 right-2 z-10 cursor-pointer rounded-full p-1 text-white"
								onclick={() => removeEmbed(i)}
							>
								<X size={16} strokeWidth={2} />
							</button>
						</div>
					{/each}
				</div>
			{/if}
		</MicrobloggingPostCreator>
	</div>
</Box>
