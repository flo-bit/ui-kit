<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor, type Content } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Placeholder from '@tiptap/extension-placeholder';
	import Image from '@tiptap/extension-image';
	import { common, createLowlight } from 'lowlight';
	import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
	import BubbleMenu from '@tiptap/extension-bubble-menu';
	import Strike from '@tiptap/extension-strike';
	import Underline from '@tiptap/extension-underline';
	import Link from '@tiptap/extension-link';

	import './code.css';
	import { Button, Input, Toggle } from '@fuxui/base';

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

	const lowlight = createLowlight(common);

	let hasFocus = true;

	let menu: HTMLElement | null = $state(null);

	let isBold = $state(false);
	let isItalic = $state(false);
	let isUnderline = $state(false);
	let isStrikethrough = $state(false);
	let isLink = $state(false);

	onMount(() => {
		if (!ref) return;

		let extensions = [
			StarterKit.configure({
				dropcursor: {
					class: 'text-base-500'
				},
				codeBlock: false
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
						!editor.isActive('codeBlock')
					);
				}
			}),
			Strike.configure({}),
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

				if (!isLink) showLinkEdit = false;
			},
			content
		});

		menu?.classList.remove('hidden');
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

	let showLinkEdit = $state(false);

	let linkInput: HTMLInputElement | null = $state(null);
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

<div
	bind:this={menu}
	class="menu bg-base-50 dark:bg-base-900 relative hidden w-fit rounded-2xl px-1 py-1 shadow-lg backdrop-blur-sm"
>
	{#if !showLinkEdit}
		<Toggle
			size="sm"
			onclick={() => editor?.chain().focus().toggleBold().run()}
			bind:pressed={isBold}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z"
					clip-rule="evenodd"
				/>
			</svg>

			<span class="sr-only">Bold</span>
		</Toggle>

		<Toggle
			size="sm"
			onclick={() => editor?.chain().focus().toggleItalic().run()}
			bind:pressed={isItalic}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M10.497 3.744a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.275l-5.357 15.002h2.632a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5h3.275l5.357-15.002h-2.632a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>

			<span class="sr-only">Italic</span>
		</Toggle>

		<Toggle
			size="sm"
			onclick={() => editor?.chain().focus().toggleUnderline().run()}
			bind:pressed={isUnderline}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>

			<span class="sr-only">Underline</span>
		</Toggle>

		<Toggle
			size="sm"
			onclick={() => editor?.chain().focus().toggleStrike().run()}
			bind:pressed={isStrikethrough}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M9.657 4.728c-1.086.385-1.766 1.057-1.979 1.85-.214.8.046 1.733.81 2.616.746.862 1.93 1.612 3.388 2.003.07.019.14.037.21.053h8.163a.75.75 0 0 1 0 1.5h-8.24a.66.66 0 0 1-.02 0H3.75a.75.75 0 0 1 0-1.5h4.78a7.108 7.108 0 0 1-1.175-1.074C6.372 9.042 5.849 7.61 6.229 6.19c.377-1.408 1.528-2.38 2.927-2.876 1.402-.497 3.127-.55 4.855-.086A8.937 8.937 0 0 1 16.94 4.6a.75.75 0 0 1-.881 1.215 7.437 7.437 0 0 0-2.436-1.14c-1.473-.394-2.885-.331-3.966.052Zm6.533 9.632a.75.75 0 0 1 1.03.25c.592.974.846 2.094.55 3.2-.378 1.408-1.529 2.38-2.927 2.876-1.402.497-3.127.55-4.855.087-1.712-.46-3.168-1.354-4.134-2.47a.75.75 0 0 1 1.134-.982c.746.862 1.93 1.612 3.388 2.003 1.473.394 2.884.331 3.966-.052 1.085-.384 1.766-1.056 1.978-1.85.169-.628.046-1.33-.381-2.032a.75.75 0 0 1 .25-1.03Z"
					clip-rule="evenodd"
				/>
			</svg>

			<span class="sr-only">Strikethrough</span>
		</Toggle>

		<Toggle
			size="sm"
			onclick={() => {
				if (isLink) {
					//tiptap?.chain().focus().unsetLink().run();
					// get current link
					link = editor?.getAttributes('link').href;
					showLinkEdit = true;

					setTimeout(() => {
						linkInput?.focus();
					}, 10);
				} else {
					link = '';
					showLinkEdit = true;

					setTimeout(() => {
						linkInput?.focus();
					}, 10);
				}
			}}
			bind:pressed={isLink}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
					clip-rule="evenodd"
				/>
			</svg>

			<span class="sr-only">Link</span>
		</Toggle>
	{:else}
		<div class="flex items-center gap-1">
			<Input
				bind:ref={linkInput}
				sizeVariant="sm"
				bind:value={link}
				placeholder="Enter link"
				onblur={() => {
					if (link === '') {
						editor?.chain().focus().unsetLink().run();
					} else {
						editor?.chain().focus().setLink({ href: link }).run();
					}
				}}
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						if (link === '') {
							editor?.chain().focus().unsetLink().run();
						} else {
							editor?.chain().focus().setLink({ href: link }).run();
						}
						showLinkEdit = false;
					}
				}}
			/>
			<Button
				size="iconSm"
				onclick={() => {
					if (link === '') {
						editor?.chain().focus().unsetLink().run();
					} else {
						editor?.chain().focus().setLink({ href: link }).run();
					}
					showLinkEdit = false;
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>

				<span class="sr-only">save link</span>
			</Button>
			<Button
				size="iconSm"
				onclick={() => {
					editor?.chain().focus().unsetLink().run();
					showLinkEdit = false;
				}}
				variant="ghost"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
					/>
				</svg>
				<span class="sr-only">remove link</span>
			</Button>
		</div>
	{/if}
</div>

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
