<script lang="ts">
	import { Select } from '@foxui/all';

	let selected = $state('Banana');
</script>

<Select
	bind:value={selected}
	type="single"
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange' },
		{ value: 'Banana', label: 'Banana' }
	]}
/>
