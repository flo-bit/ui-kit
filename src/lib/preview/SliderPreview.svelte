<script lang="ts">
	import { Subheading } from '$lib/components/heading';
	import { Slider } from '$lib/components/slider';

	let value = $state(50);
</script>

<Subheading class="mb-6">Slider</Subheading>

<Slider bind:value type="single" />
