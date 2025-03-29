<script lang="ts">
	import AccordionExample from './Example.svelte';
	import AccordionProps from './Props.svelte';
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
	<AccordionItem title="Is it accessible?">
		Yes. It adheres to the WAI-ARIA design pattern.
	</AccordionItem>
	<AccordionItem title="Are you sure?">
		I mean, I hope so? It's based on the bits-ui accordion component, so if not it's not my fault 😅
	</AccordionItem>
</Accordion>
```

## API Reference

<AccordionProps />

## Credits

This component is based on the [bits-ui accordion component](https://bits-ui.com/docs/components/accordion).
