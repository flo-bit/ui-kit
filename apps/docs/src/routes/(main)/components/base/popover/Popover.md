<script lang="ts">
	import PopoverExample from './Example.svelte';
</script>

# Popover

## Example

<PopoverExample />

## Usage

```svelte
<script lang="ts">
	import { Popover } from '@foxui/core';
</script>

<!-- default trigger -->
<Popover triggerText="Click me" triggerVariant="secondary">Hello this is a test</Popover>

<!-- custom trigger -->
<Popover>
	{#snippet child({ props })}
		<button {...props} class="bg-accent-500 mt-2 size-8 cursor-pointer rounded-full"></button>
	{/snippet}
	Content of the popover here
</Popover>
```
