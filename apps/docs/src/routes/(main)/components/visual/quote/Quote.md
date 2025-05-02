<script lang="ts">
	import Example from './Example.svelte';
</script>

# Quote

## Example

<Example />

## Usage

```svelte
<script>
	import { Quote } from '@fuxui/visual';
</script>

<Quote
	quote="Two things are infinite, the universe and the number of javascript frameworks, and I am not yet completely sure about the universe."
	author={{
		name: 'Albert Einstein',
		role: 'Scientist',
		src: './einstein.png'
	}}
	useThemeColor
/>
```
