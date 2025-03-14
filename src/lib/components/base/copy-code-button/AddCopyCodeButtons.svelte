<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import CopyCodeButton from './CopyCodeButton.svelte';

	onMount(() => {
		addButtons();
	});

	afterNavigate(() => {
		addButtons();
	});

	let codeblocks: HTMLElement[] = $state([]);

	function addButtons() {
		const preElements = Array.from(document.querySelectorAll('pre'));
		for (let pre of preElements) {
			if (pre.classList.contains('wrapped')) continue;

			pre.classList.add('wrapped');

			const wrapper = document.createElement('div');
			wrapper.classList.add('relative', 'group');
			const clone = pre.cloneNode(true);

			wrapper.appendChild(clone);

			pre.parentNode?.replaceChild(wrapper, pre);

			codeblocks.push(wrapper);
		}
	}
</script>

{#each codeblocks as codeblock}
	<CopyCodeButton {codeblock} />
{/each}
