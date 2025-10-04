<script>
	import { ColorSelect } from '@foxui/colors';
</script>

<ColorSelect
	colors={[
		{ class: 'text-accent-500', label: '1' },
		{ label: '2', value: 'oklch(from var(--color-accent-500) l c calc(h + 20))' },
		{ label: '3', value: 'oklch(from var(--color-accent-500) l c calc(h + 40))' },
		{ label: '4', value: 'oklch(from var(--color-accent-500) l c calc(h + 60))' }
	]}
/>
