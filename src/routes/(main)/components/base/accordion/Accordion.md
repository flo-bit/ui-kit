<script lang="ts">
	import AccordionExample from './Example.svelte';

	import Api from '$docs/site-components/API.svelte';
</script>

# Accordion

## Example

<AccordionExample />

## Usage

```svelte
<script lang="ts">
	import { Accordion, AccordionItem } from 'fuchs';
</script>

<Accordion type="single">
	<AccordionItem value="item-1" title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem value="item-2" title="Are you sure?">
		I mean, I hope so? It's based on the bits-ui accordion component, so if not it's not my fault 😅
	</AccordionItem>
</Accordion>
```
