<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor, type Content } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';
	import Image from '@tiptap/extension-image';
	import { all, createLowlight } from 'lowlight';
	import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
	import BubbleMenu from '@tiptap/extension-bubble-menu';
	import Underline from '@tiptap/extension-underline';
	import Link from '@tiptap/extension-link';
	import RichTextEditorMenu from './RichTextEditorMenu.svelte';
	import type { RichTextTypes } from '.';
	import RichTextEditorLinkMenu from './RichTextEditorLinkMenu.svelte';

	import './code.css';

	let {
		content = $bindable({}),
		placeholder = 'Write something ...',
		editor = $bindable(null),
		ref = $bindable(null)
	}: {
		content: Content;
		placeholder?: string;
		editor?: Editor | null;
		ref?: HTMLDivElement | null;
	} = $props();

	const lowlight = createLowlight(all);

	let hasFocus = true;

	let menu: HTMLElement | null = $state(null);
	let menuLink: HTMLElement | null = $state(null);

	let selectedType: RichTextTypes = $state('paragraph');

	let isBold = $state(false);
	let isItalic = $state(false);
	let isUnderline = $state(false);
	let isStrikethrough = $state(false);
	let isLink = $state(false);
	let isImage = $state(false);

	onMount(() => {
		if (!ref) return;

		let extensions = [
			StarterKit.configure({
				dropcursor: {
					class: 'text-accent-500/30 rounded-2xl',
					width: 2
				},
				codeBlock: false,
				heading: {
					levels: [1, 2, 3]
				}
			}),
			Placeholder.configure({ placeholder }),
			// Only use CustomImage, not the standard Image extension
			Image.configure({
				HTMLAttributes: {
					class: 'max-w-full object-contain relative rounded-2xl'
				}
			}),
			CodeBlockLowlight.configure({
				lowlight,
				defaultLanguage: 'js'
			}),
			BubbleMenu.configure({
				element: menu,
				shouldShow: ({ editor }) => {
					// dont show if image selected or no selection or is code block
					return (
						!editor.isActive('image') &&
						!editor.view.state.selection.empty &&
						!editor.isActive('codeBlock') &&
						!editor.isActive('link')
					);
				},
				pluginKey: 'bubble-menu-marks'
			}),
			BubbleMenu.configure({
				element: menuLink,
				shouldShow: ({ editor }) => {
					// only show if link is selected
					return editor.isActive('link') && !editor.view.state.selection.empty;
				},
				pluginKey: 'bubble-menu-links'
			}),
			Underline.configure({}),
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: 'https'
			})
		];

		editor = new Editor({
			element: ref,
			extensions,
			editorProps: {
				attributes: {
					class: 'outline-none'
				}
			},
			onUpdate: (ctx) => {
				content = ctx.editor.getJSON();
			},
			onFocus: () => {
				hasFocus = true;
			},
			onBlur: () => {
				hasFocus = false;
			},
			onTransaction: (ctx) => {
				isBold = ctx.editor.isActive('bold');
				isItalic = ctx.editor.isActive('italic');
				isUnderline = ctx.editor.isActive('underline');
				isStrikethrough = ctx.editor.isActive('strike');
				isLink = ctx.editor.isActive('link');
				isImage = ctx.editor.isActive('image');

				if (ctx.editor.isActive('heading', { level: 1 })) {
					selectedType = 'heading-1';
				} else if (ctx.editor.isActive('heading', { level: 2 })) {
					selectedType = 'heading-2';
				} else if (ctx.editor.isActive('heading', { level: 3 })) {
					selectedType = 'heading-3';
				} else if (ctx.editor.isActive('blockquote')) {
					selectedType = 'blockquote';
				} else if (ctx.editor.isActive('code')) {
					selectedType = 'code';
				} else if (ctx.editor.isActive('bulletList')) {
					selectedType = 'bullet-list';
				} else if (ctx.editor.isActive('orderedList')) {
					selectedType = 'ordered-list';
				} else {
					selectedType = 'paragraph';
				}
			},
			content
		});

		menu?.classList.remove('hidden');
		menuLink?.classList.remove('hidden');
	});

	// Flag to track whether a file is being dragged over the drop area
	let isDragOver = $state(false);

	// Store local image files for later upload
	let localImages: Map<string, File> = $state(new Map());

	// Track which image URLs in the editor are local previews
	let localImageUrls: Set<string> = $state(new Set());

	// Process image file to create a local preview
	function processImageFile(file: File, input?: HTMLInputElement) {
		if (!editor) {
			console.warn('Tiptap editor not initialized');
			return;
		}

		try {
			// Create a local blob URL for the image
			const localUrl = URL.createObjectURL(file);

			// Store the file for later upload
			localImages.set(localUrl, file);
			localImageUrls.add(localUrl);

			// Insert image into editor with the local URL
			editor
				.chain()
				.focus()
				.insertContent({
					type: 'image',
					attrs: {
						src: localUrl,
						'data-local': 'true' // Mark as local image
					}
				})
				.run();

			// Update content state to ensure persistence
			content = editor.getJSON();

			// Clear the file input if provided
			if (input) input.value = '';
		} catch (error) {
			console.error('Error creating image preview:', error);
		}
	}
	export function handlePaste(node: HTMLElement) {
		const pasteHandler = (event: ClipboardEvent) => {
			const items = event.clipboardData?.items;
			if (!items) return;
			// Check for image data in clipboard
			for (const item of Array.from(items)) {
				if (item.type.startsWith('image/')) {
					// Get the image file from clipboard
					const file = item.getAsFile();
					if (!file) continue;
					// Prevent default paste behavior
					event.preventDefault();
					processImageFile(file);
					// Only process the first image found
					return;
				}
			}
		};

		node.addEventListener('paste', pasteHandler);

		return {
			destroy() {
				node.removeEventListener('paste', pasteHandler);
			}
		};
	}

	// --- Drag-and-drop handlers for image upload ---
	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragOver = true;
	}
	function handleDragLeave(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragOver = false;
	}
	function handleDrop(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		isDragOver = false;
		if (!event.dataTransfer?.files?.length) return;
		const file = event.dataTransfer.files[0];
		if (file?.type.startsWith('image/')) {
			processImageFile(file);
		}
	}

	onDestroy(() => {
		for (const localUrl of localImageUrls) {
			URL.revokeObjectURL(localUrl);
		}

		editor?.destroy();
	});

	let link = $state('');

	let linkInput: HTMLInputElement | null = $state(null);

	function clickedLink() {
		if (isLink) {
			//tiptap?.chain().focus().unsetLink().run();
			// get current link
			link = editor?.getAttributes('link').href;

			setTimeout(() => {
				linkInput?.focus();
			}, 100);
		} else {
			link = '';
			// set link
			editor?.chain().focus().setLink({ href: link }).run();

			setTimeout(() => {
				linkInput?.focus();
			}, 100);
		}
	}
</script>

<div
	bind:this={ref}
	class="relative flex-1"
	use:handlePaste
	ondragover={handleDragOver}
	ondragleave={handleDragLeave}
	ondrop={handleDrop}
	role="region"
></div>

<RichTextEditorMenu
	bind:ref={menu}
	{editor}
	{isBold}
	{isItalic}
	{isUnderline}
	{isStrikethrough}
	{isLink}
	{isImage}
	{clickedLink}
	{processImageFile}
	bind:selectedType
/>

<RichTextEditorLinkMenu
	bind:ref={menuLink}
	{editor}
	bind:link
/>


<style>
	:global(.tiptap) {
		:first-child {
			margin-top: 0;
		}

		:global(img) {
			display: block;
			height: auto;
			margin: 1.5rem 0;
			max-width: 100%;

			&.ProseMirror-selectednode {
				outline: 3px solid var(--color-accent-500);
			}
		}
	}
</style>
