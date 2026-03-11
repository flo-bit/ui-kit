<script lang="ts" module>
	export type MentionItem = {
		id: string;
		label: string;
		avatar?: string;
		data?: Record<string, unknown>;
	};
</script>

<script lang="ts">
	import { onMount, mount, unmount } from 'svelte';
	import type { Editor } from '@tiptap/core';
	import Suggestion, { type SuggestionKeyDownProps, type SuggestionProps } from '@tiptap/suggestion';
	import { PluginKey } from '@tiptap/pm/state';
	import { computePosition, flip, shift, offset } from '@floating-ui/dom';
	import type { Snippet } from 'svelte';
	import MentionMenuPopup from './MentionMenuPopup.svelte';

	let {
		editor,
		items: itemsFn,
		char = '@',
		minQueryLength = 2,
		pluginKey = 'mentionMenu',
		class: className,
		item: itemSnippet
	}: {
		editor: Editor;
		items: (query: string) => MentionItem[] | Promise<MentionItem[]>;
		char?: string;
		minQueryLength?: number;
		pluginKey?: string;
		class?: string;
		item?: Snippet<[{ item: MentionItem; isActive: boolean; select: () => void }]>;
	} = $props();

	onMount(() => {
		const key = new PluginKey(pluginKey);
		let floatingEl: HTMLElement;
		let component: Record<string, any>;

		function updatePosition(clientRect: (() => DOMRect | null) | null | undefined) {
			if (!clientRect || !floatingEl) return;
			const rect = clientRect();
			if (!rect) return;

			const virtualRef = { getBoundingClientRect: () => rect };

			computePosition(virtualRef as Element, floatingEl, {
				placement: 'bottom-start',
				middleware: [offset(8), flip(), shift({ padding: 8 })]
			}).then(({ x, y }) => {
				Object.assign(floatingEl.style, {
					left: `${x}px`,
					top: `${y}px`
				});
			});
		}

		const plugin = Suggestion({
			editor,
			char,
			pluginKey: key,

			items: async ({ query }) => {
				if (!query || query.length < minQueryLength) return [];
				return await itemsFn(query);
			},

			command: ({ editor: ed, range, props }) => {
				ed.chain()
					.focus()
					.insertContentAt(range, [
						{
							type: 'mention',
							attrs: { id: props.id, label: props.label, data: props.data ?? null }
						},
						{ type: 'text', text: ' ' }
					])
					.run();
			},

			render: () => ({
				onStart: (props: SuggestionProps) => {
					floatingEl = document.createElement('div');
					floatingEl.style.position = 'absolute';
					floatingEl.style.zIndex = '50';
					document.body.appendChild(floatingEl);

					component = mount(MentionMenuPopup, {
						target: floatingEl,
						props: {
							items: props.items as MentionItem[],
							command: props.command as (p: MentionItem) => void,
							class: className,
							item: itemSnippet
						}
					});

					updatePosition(props.clientRect);
				},
				onUpdate: (props: SuggestionProps) => {
					component.setItems(props.items as MentionItem[]);
					component.setCommand(props.command as (p: MentionItem) => void);
					updatePosition(props.clientRect);
				},
				onKeyDown: (props: SuggestionKeyDownProps) => {
					if (props.event.key === 'Escape') {
						floatingEl.style.display = 'none';
						return true;
					}
					return component.onKeyDown(props.event);
				},
				onExit: () => {
					unmount(component);
					floatingEl.remove();
				}
			})
		});

		// Insert at the BEGINNING of the plugin list so the suggestion's
		// handleKeyDown runs before the base keymap (which handles Enter).
		// editor.registerPlugin() appends to the end, which is too late.
		const { state } = editor.view;
		editor.view.updateState(
			state.reconfigure({ plugins: [plugin, ...state.plugins] })
		);

		return () => {
			editor.unregisterPlugin(key);
		};
	});
</script>
