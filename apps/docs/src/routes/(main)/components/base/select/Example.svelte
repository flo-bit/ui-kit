<script lang="ts">
	import { Select } from '@fuxui/base';

	let selected = $state('Banana');
</script>

<Select bind:selected items={['Apple', 'Orange', 'Banana']} />
