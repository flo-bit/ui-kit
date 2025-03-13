<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
</script>

<Subheading>Accordion</Subheading>

<Accordion type="single" class="w-full">
	<AccordionItem value="item-1" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem value="item-2" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
</Accordion>
