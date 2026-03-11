<script lang="ts">
	import { CoreRichTextEditor } from '../core-rich-text-editor/';
	import type { BaseEditorProps } from '../core-rich-text-editor/types';
	import FormattingBubbleMenu from '../rich-text-bubble-menu/FormattingBubbleMenu.svelte';
	import { SlashMenu } from '../slash-menu';
	import { ImageExtension, EditableImage } from '../image';
	import type { ImageUploadFn } from '../image';
	import { EmbedExtension } from '../embed/EmbedExtension';
	import EmbedModal from '../embed/EmbedModal.svelte';
	import { youtubeEmbed } from '../embed/helpers';
	import type { EmbedDefinition } from '../embed/helpers';

	let {
		content = $bindable(),
		editor = $bindable(),
		ref = $bindable(null),
		bubbleMenu = true,
		slashMenu = true,
		image = undefined,
		embeds = undefined,
		extraExtensions,
		...restProps
	}: Omit<BaseEditorProps, 'extraExtensions'> & {
		/** Show the formatting bubble menu on text selection. @default true */
		bubbleMenu?: boolean;
		/** Show the slash command menu when typing "/". @default true */
		slashMenu?: boolean;
		/** Enable image uploads. Pass an upload function, or `false` to disable. When provided, ImageExtension is added with EditableImage. */
		image?: ImageUploadFn | false;
		/** Enable embeds. Pass an array of EmbedDefinitions, `true` for YouTube only, or `false` to disable. @default undefined */
		embeds?: EmbedDefinition[] | boolean;
		extraExtensions?: BaseEditorProps['extraExtensions'];
	} = $props();

	let imageExtensions = $derived(
		image
			? [ImageExtension.configure({ upload: image, imageComponent: EditableImage })]
			: []
	);

	let embedDefinitions = $derived(
		embeds === true ? [youtubeEmbed] : Array.isArray(embeds) ? embeds : []
	);

	let embedExtensions = $derived(
		embedDefinitions.length > 0
			? [EmbedExtension.configure({ embeds: embedDefinitions })]
			: []
	);

	let allExtraExtensions = $derived([
		...imageExtensions,
		...embedExtensions,
		...(extraExtensions ?? [])
	]);
</script>

<CoreRichTextEditor
	bind:content
	bind:editor
	bind:ref
	extraExtensions={allExtraExtensions}
	{...restProps}
>
	{#if bubbleMenu}
		<FormattingBubbleMenu {editor} />
	{/if}
	{#if slashMenu}
		<SlashMenu editor={$editor} />
	{/if}
	{#if embedDefinitions.length > 0}
		<EmbedModal editor={$editor} />
	{/if}
</CoreRichTextEditor>
