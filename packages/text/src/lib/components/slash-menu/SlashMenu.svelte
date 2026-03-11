<script lang="ts" module>
	import type { Editor, Range } from '@tiptap/core';

	export type SlashMenuItem = {
		id: string;
		label: string;
		description?: string;
		icon?: string;
		command: (props: { editor: Editor; range: Range }) => void;
	};
</script>

<script lang="ts">
	import { onMount, mount, unmount } from 'svelte';
	import Suggestion, { type SuggestionKeyDownProps, type SuggestionProps } from '@tiptap/suggestion';
	import { PluginKey } from '@tiptap/pm/state';
	import { computePosition, flip, shift, offset } from '@floating-ui/dom';
	import type { Snippet } from 'svelte';
	import SlashMenuPopup from './SlashMenuPopup.svelte';
	import { getSlashMenuItems } from './items';

	let {
		editor,
		items: itemsProp,
		char = '/',
		pluginKey = 'slashMenu',
		class: className,
		item: itemSnippet
	}: {
		editor: Editor;
		items?: SlashMenuItem[] | ((query: string) => SlashMenuItem[] | Promise<SlashMenuItem[]>);
		char?: string;
		pluginKey?: string;
		class?: string;
		item?: Snippet<[{ item: SlashMenuItem; isActive: boolean; select: () => void }]>;
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

			command: ({ editor: ed, range, props }) => {
				props.command({ editor: ed, range });
			},

			items: async ({ query }) => {
				let resolved: SlashMenuItem[];

				if (typeof itemsProp === 'function') {
					resolved = await itemsProp(query);
				} else {
					resolved = itemsProp ?? getSlashMenuItems(editor);
				}

				if (!query) return resolved;
				return resolved.filter((item) =>
					item.label.toLowerCase().includes(query.toLowerCase())
				);
			},

			render: () => ({
				onStart: (props: SuggestionProps) => {
					floatingEl = document.createElement('div');
					floatingEl.style.position = 'absolute';
					floatingEl.style.zIndex = '50';
					document.body.appendChild(floatingEl);

					component = mount(SlashMenuPopup, {
						target: floatingEl,
						props: {
							items: props.items as SlashMenuItem[],
							editor: props.editor,
							range: props.range,
							class: className,
							item: itemSnippet
						}
					});

					updatePosition(props.clientRect);
				},
				onUpdate: (props: SuggestionProps) => {
					component.setItems(props.items as SlashMenuItem[]);
					component.setRange(props.range);
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

		// Insert at the beginning so handleKeyDown runs before the base keymap
		const { state } = editor.view;
		editor.view.updateState(
			state.reconfigure({ plugins: [plugin, ...state.plugins] })
		);

		return () => {
			editor.unregisterPlugin(key);
		};
	});
</script>
