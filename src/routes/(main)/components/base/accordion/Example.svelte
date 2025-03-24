<script lang="ts">
	import { Accordion, AccordionItem } from '$lib';
</script>

<Accordion type="single">
	<AccordionItem value="item-1" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem value="item-2" title="Are you sure?">
		I mean, I hope so? It's based on the <a
			href="https://bits-ui.com/docs/components/accordion"
			target="_blank">bits-ui accordion component</a
		>, so if not it's not my fault 😅
	</AccordionItem>
</Accordion>
