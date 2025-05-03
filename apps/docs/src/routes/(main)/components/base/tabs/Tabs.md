<script>
	import Example from './Example.svelte';
</script>

# Tabs

## Example

<Example />

## Usage

```svelte
<script>
	import { Tabs } from '@fuxui/base';

	let active = $state('Tab 1');
</script>

<!-- alternatively you can also supply a href for each tab -->
<Tabs
	items={[
		{ name: 'Tab 1', onclick: () => (active = 'Tab 1') },
		{ name: 'Tab 2', onclick: () => (active = 'Tab 2') }
	]}
	active={active}
/>
```
