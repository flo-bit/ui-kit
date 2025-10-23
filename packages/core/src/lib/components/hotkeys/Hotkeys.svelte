<script lang="ts" module>
	export let hotkeys: Record<string, () => void> = $state({});

	export let hotkeysState: {
		enabled: boolean;
	} = $state({
		enabled: true
	});
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let NON_ENGLISH_LAYOUT = /^[^\x00-\x7F]$/;

	let IGNORE_INPUTS = {
		checkbox: true,
		file: true,
		radio: true
	};

	let CLICK_INPUTS = {
		button: true,
		reset: true,
		submit: true
	};

	let KEY_REPLACERS = {
		' ': 'space',
		'+': 'plus'
	};

	function isInsideIgnored(parent: HTMLElement, node: HTMLElement) {
		if (node.tagName !== 'BODY' && parent !== node) {
			if (
				node.hasAttribute('data-keyux-ignore-hotkeys') ||
				node.getAttribute('aria-hidden') === 'true' ||
				node.hasAttribute('inert')
			) {
				return true;
			} else {
				return isInsideIgnored(parent, node.parentNode as HTMLElement);
			}
		}
	}

	function findNonIgnored(activeElement: HTMLElement, elements: HTMLElement[]) {
		for (let element of elements) {
			if (isInsideIgnored(activeElement, element)) continue;
			return element;
		}
	}

	function checkHotkey(window: Window, code: string) {
		let realCode = code;

		let where = window.document;
		let activeElement = where.activeElement;

		let areaId = activeElement?.getAttribute('data-keyux-hotkeys');
		if (areaId) {
			let area = where.querySelector(`#${areaId}`);
			if (area) {
				let element = area.querySelector(`[aria-keyshortcuts="${realCode}" i]`);
				if (element) return element;
			}
		}

		return (
			findNonIgnored(
				activeElement as HTMLElement,
				activeElement?.querySelectorAll(
					`[aria-keyshortcuts="${realCode}" i]`
				) as unknown as HTMLElement[]
			) ||
			findNonIgnored(
				where as unknown as HTMLElement,
				where?.querySelectorAll(`[aria-keyshortcuts="${realCode}" i]`) as unknown as HTMLElement[]
			)
		);
	}

	function findHotKey(event: KeyboardEvent, window: Window) {
		let prefix = '';
		if (event.metaKey) prefix += 'meta+';
		if (event.ctrlKey) prefix += 'ctrl+';
		if (event.altKey) prefix += 'alt+';
		if (event.shiftKey) prefix += 'shift+';

		let code = prefix;
		code += KEY_REPLACERS[event.key as keyof typeof KEY_REPLACERS] ?? event.key.toLowerCase();

		let hotkey = checkHotkey(window, code);
		if (
			!hotkey &&
			(event.key.length > 1 || NON_ENGLISH_LAYOUT.test(event.key)) &&
			/^(Key.|Digit\d)$/.test(event.code)
		) {
			let enKey = event.code.replace(/^Key|^Digit/, '').toLowerCase();
			hotkey = checkHotkey(window, prefix + enKey);
		}

		return hotkey;
	}

	// function findHotKey(event: KeyboardEvent) {
	// 	let prefix = '';
	// 	if (event.metaKey) prefix += 'meta+';
	// 	if (event.ctrlKey) prefix += 'ctrl+';
	// 	if (event.altKey) prefix += 'alt+';
	// 	if (event.shiftKey) prefix += 'shift+';

	// 	let code = prefix;
	// 	code += event.key.toLowerCase();

	// 	let hotkey = hotkeys[code];
	// 	if (
	// 		!hotkey &&
	// 		(event.key.length > 1 || NON_ENGLISH_LAYOUT.test(event.key)) &&
	// 		/^(Key.|Digit\d)$/.test(event.code)
	// 	) {
	// 		let enKey = event.code.replace(/^Key|^Digit/, '').toLowerCase();
	// 		hotkey = hotkeys[prefix + enKey];
	// 	}

	// 	return hotkey;
	// }

	function handleKeyDown(event: KeyboardEvent) {
		if (!hotkeysState.enabled) {
			return;
		}

		let isSpecialKey = event.ctrlKey || event.metaKey || event.altKey;
		let insideEditable =
			(event.target as HTMLElement)?.isContentEditable ||
			(event.target as HTMLElement)?.tagName === 'TEXTAREA' ||
			((event.target as HTMLElement)?.tagName === 'INPUT' &&
				!IGNORE_INPUTS[(event.target as HTMLInputElement)?.type as keyof typeof IGNORE_INPUTS]);
		let insideFocusGroup = (event.target as HTMLElement)?.role === 'menuitem';
		if (!isSpecialKey && (insideEditable || insideFocusGroup)) {
			return;
		}

		let active = findHotKey(event, window);
		if (!active) return;
		if (
			active.tagName === 'TEXTAREA' ||
			(active.tagName === 'INPUT' && !CLICK_INPUTS[active.type])
		) {
			setTimeout(() => {
				(active as HTMLElement).focus();
			});
		} else {
			(active as HTMLElement).click();
		}

		// let hotkey = findHotKey(event);
		// hotkey?.();
	}
	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>
