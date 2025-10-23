<script lang="ts">
	import LinkCardExample from './Example.svelte';
</script>

# Link Card

## Example

<LinkCardExample />

## Usage

```svelte
<script lang="ts">
	import { LinkCard } from '@foxui/social';
</script>

<LinkCard
	meta={{
		title: "hi, i'm florian",
		description:
			"hello world! this is my personal website. i'm florian, a full-stack software engineer based in berlin.",
		image: 'https://flo-bit.dev/og.jpg'
	}}
	href="https://www.flo-bit.dev"
/>
```
