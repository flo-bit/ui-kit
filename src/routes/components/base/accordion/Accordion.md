<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';
</script>

# Accordion

## Example

<Accordion type="single">
	<AccordionItem value="item-1" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem value="item-2" title="Are you sure?">
		I mean, I hope so?
	</AccordionItem>
</Accordion>

## Usage

```svelte
<script lang="ts">
	import { Accordion, AccordionItem } from 'fox-ui-svelte';
</script>

<Accordion type="single">
	<AccordionItem value="item-1" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem value="item-2" title="Are you sure?">I mean, I hope so?</AccordionItem>
</Accordion>
```
