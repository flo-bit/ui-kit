<script lang="ts">
	import CustomizationColors from './Colors.md';
	import HtmlSnippet from './HtmlSnippet.md';
	import CustomizationRest from './Rest.md';
	import { Prose } from '@foxui/all';
	import { SelectTheme } from '@foxui/all';
	import { onMount, tick } from 'svelte';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';

	let accentColor = $state('pink');
	let baseColor = $state('stone');
	let snippetContainer: HTMLDivElement;
	let originalHtml = '';

	function readTheme() {
		try {
			const savedAccent = localStorage.getItem('accentColor');
			const savedBase = localStorage.getItem('baseColor');
			if (savedAccent) accentColor = JSON.parse(savedAccent);
			if (savedBase) baseColor = JSON.parse(savedBase);
		} catch {}
	}

	onMount(readTheme);

	function onThemeChanged() {
		readTheme();
	}

	$effect(() => {
		if (!snippetContainer) return;
		// re-run when colors change
		accentColor;
		baseColor;
		tick().then(() => updateSnippet());
	});

	function updateSnippet() {
		if (!snippetContainer) return;
		const pre = snippetContainer.querySelector('pre');
		if (!pre) return;

		if (!originalHtml) originalHtml = pre.innerHTML;

		pre.innerHTML = originalHtml
			.replace(/__ACCENT__/g, accentColor)
			.replace(/__BASE__/g, baseColor);
	}
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/customization/llms.txt" />
</div>

<Prose>
	<CustomizationColors />
	<div class="not-prose my-6">
		<SelectTheme onchanged={onThemeChanged} />
	</div>

	<div bind:this={snippetContainer}>
		<HtmlSnippet />
	</div>

	<CustomizationRest />
</Prose>
