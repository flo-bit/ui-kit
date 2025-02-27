<script>
	import ColorSelect from '$lib/components/color-select/ColorSelect.svelte';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import { onMount, tick } from 'svelte';

	let accentColor = $state({
		class: '',
		label: ''
	});

	let baseColor = $state({
		class: '',
		label: ''
	});

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

	onMount(async () => {
		await tick();
		let root = document.getElementsByTagName('html')[0];
		// check if one of the accent colors is already in the document body
		const color = accentColors.find((color) => root.classList.contains(color.label.toLowerCase()));
		if (color) {
			accentColor.label = color.label;
		}
		console.log(document.getElementsByTagName('html')[0]);

		const bColor = baseColors.find((color) => root.classList.contains(color.label.toLowerCase()));
		if (bColor) {
			baseColor.label = bColor.label;
		}
	});
</script>

<Subheading>Select Theme</Subheading>

<Text class="mb-2 mt-4">Accent Color</Text>
<ColorSelect
	bind:selected={accentColor}
	colors={accentColors}
	onselected={(color, previous) => {
		document.body.classList.remove(previous.label.toLowerCase());
		document.body.classList.add(color.label.toLowerCase());

		localStorage.setItem('accentColor', JSON.stringify(color.label));
	}}
/>

<Text class="mb-2 mt-4">Base Color</Text>
<ColorSelect
	bind:selected={baseColor}
	colors={baseColors}
	onselected={(color, previous) => {
		document.documentElement.classList.remove(previous.label.toLowerCase());
		document.documentElement.classList.add(color.label.toLowerCase());

		localStorage.setItem('baseColor', JSON.stringify(color.label));
	}}
/>
