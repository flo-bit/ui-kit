<script>
	import ColorSelect from '$lib/components/color-select/ColorSelect.svelte';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Text from '$lib/components/text/Text.svelte';
</script>

<Subheading>Color Select</Subheading>

<Text class="mt-4 mb-2">Tailwind Classes</Text>
<ColorSelect
	colors={[
		{ class: 'bg-red-500', label: 'red' },
		{ class: 'bg-green-500', label: 'green' },
		{ class: 'bg-blue-500', label: 'blue' },
		{ class: 'bg-yellow-500', label: 'yellow' }
	]}
/>

<Text class="mt-4 mb-2">Custom Colors</Text>
<ColorSelect
	colors={[
		{ value: '#690B22', label: 'red' },
		{ value: '#E07A5F', label: 'green' },
		{ value: '#F1E3D3', label: 'blue' },
		{ value: '#1B4D3E', label: 'yellow' }
	]}
/>
