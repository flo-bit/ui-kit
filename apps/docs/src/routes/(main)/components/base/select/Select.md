<script lang="ts">
	import SelectExample from './Example.svelte';
</script>

# Select

## Example

<SelectExample />

## Usage

```svelte
<script lang="ts">
	import { Select } from '@fuxui/base';

	let selected = $state('Apple');
</script>

<Select bind:selected items={['Apple', 'Orange', 'Banana']} />
```
