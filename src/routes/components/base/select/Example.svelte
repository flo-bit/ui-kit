<script lang="ts">
	import { Select } from '$lib';

	let selected = $state('Banana');
</script>

<Select bind:selected items={['Apple', 'Orange', 'Banana']} />
