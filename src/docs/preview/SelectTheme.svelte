<script lang="ts" module>
	let accentColor = $state({
		class: '',
		label: ''
	});

	let baseColor = $state({
		class: '',
		label: ''
	});
</script>

<script lang="ts">
	import ColorSelect from '$lib/components/extra/color-select/ColorSelect.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
	import { onMount } from 'svelte';

	let accentColors = [
		{ class: 'bg-red-500', label: 'red' },
		{ class: 'bg-orange-500', label: 'orange' },
		{ class: 'bg-amber-500', label: 'amber' },
		{ class: 'bg-yellow-500', label: 'yellow' },
		{ class: 'bg-lime-500', label: 'lime' },
		{ class: 'bg-green-500', label: 'green' },
		{ class: 'bg-emerald-500', label: 'emerald' },
		{ class: 'bg-teal-500', label: 'teal' },
		{ class: 'bg-cyan-500', label: 'cyan' },
		{ class: 'bg-sky-500', label: 'sky' },
		{ class: 'bg-blue-500', label: 'blue' },
		{ class: 'bg-indigo-500', label: 'indigo' },
		{ class: 'bg-violet-500', label: 'violet' },
		{ class: 'bg-purple-500', label: 'purple' },
		{ class: 'bg-fuchsia-500', label: 'fuchsia' },
		{ class: 'bg-pink-500', label: 'pink' },
		{ class: 'bg-rose-500', label: 'rose' }
	];

	let baseColors = [
		{ class: 'bg-gray-500', label: 'gray' },
		{ class: 'bg-stone-500', label: 'stone' },
		{ class: 'bg-zinc-500', label: 'zinc' },
		{ class: 'bg-neutral-500', label: 'neutral' },
		{ class: 'bg-slate-500', label: 'slate' }
	];

	onMount(() => {
		let savedAccentColor = localStorage.getItem('accentColor');
		if (savedAccentColor) {
			accentColor.label = JSON.parse(savedAccentColor);
		} else {
			accentColor.label = 'pink';
		}

		let savedBaseColor = localStorage.getItem('baseColor');
		if (savedBaseColor) {
			baseColor.label = JSON.parse(savedBaseColor);
		} else {
			baseColor.label = 'stone';
		}
	});

	let { showTitle = true } = $props();
</script>

{#if showTitle}
	<Subheading class="mb-4">Select Theme</Subheading>
{/if}

<Text class="mb-2">Accent Color</Text>
<ColorSelect
	bind:selected={accentColor}
	colors={accentColors}
	onselected={(color, previous) => {
		document.documentElement.classList.remove(previous.label.toLowerCase());
		document.documentElement.classList.add(color.label.toLowerCase());

		localStorage.setItem('accentColor', JSON.stringify(color.label));

		window.dispatchEvent(
			new CustomEvent('theme-changed', { detail: { accentColor: color.label } })
		);
	}}
	class="w-64"
/>

<Text class="mt-4 mb-2">Base Color</Text>
<ColorSelect
	bind:selected={baseColor}
	colors={baseColors}
	onselected={(color, previous) => {
		document.documentElement.classList.remove(previous.label.toLowerCase());
		document.documentElement.classList.add(color.label.toLowerCase());

		localStorage.setItem('baseColor', JSON.stringify(color.label));

		window.dispatchEvent(new CustomEvent('theme-changed', { detail: { baseColor: color.label } }));
	}}
/>
