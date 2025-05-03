<script lang="ts">
	import { onMount } from 'svelte';
	import CopyCodeButton from './CopyCodeButton.svelte';

	onMount(() => {
		addButton?.();
	});

	let { addButton = $bindable(() => {}) }: { addButton?: () => void } = $props();

	let codeblocks: { element: HTMLElement; text?: string }[] = $state([]);

	addButton = () => {
		const preElements = Array.from(document.querySelectorAll('pre'));
		for (let pre of preElements) {
			if (pre.classList.contains('wrapped')) continue;

			pre.classList.add('wrapped');

			const wrapper = document.createElement('div');
			wrapper.classList.add('relative', 'group');
			const clone = pre.cloneNode(true);

			wrapper.appendChild(clone);

			pre.parentNode?.replaceChild(wrapper, pre);

			codeblocks.push({ element: wrapper, text: pre.innerText });
		}
	};
</script>

{#each codeblocks as codeblock}
	<CopyCodeButton element={codeblock.element} text={codeblock.text} />
{/each}
