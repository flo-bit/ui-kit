<script lang="ts">
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Select from '$lib/components/base/select/Select.svelte';
</script>

<Subheading class="mb-4">Select</Subheading>

<Select items={['Apple', 'Orange', 'Banana']} />
