<script lang="ts">
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Select from '$lib/components/select/Select.svelte';
</script>

<Subheading class="mb-4">Select</Subheading>

<Select items={['Apple', 'Orange', 'Banana']} />
