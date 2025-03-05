<script lang="ts">
	import * as Accordion from '$lib/components/base/accordion';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
</script>

<Subheading>Accordion</Subheading>

<Accordion.Root type="single" class="w-full">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
