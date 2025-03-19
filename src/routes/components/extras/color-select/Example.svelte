<script>
	import ColorSelect from '$lib/components/extra/color-select/ColorSelect.svelte';
</script>

<ColorSelect
	colors={[
		{ class: 'text-accent-700', label: 'dark' },
		{ class: 'text-accent-500', label: 'medium' },
		{ class: 'text-accent-300', label: 'light' },
		{ class: 'text-accent-100', label: 'lightest' }
	]}
/>
