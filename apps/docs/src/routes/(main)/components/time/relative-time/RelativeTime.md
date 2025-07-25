<script lang="ts">
	import Example from './Example.svelte';
</script>

# Stopwatch

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { RelativeTime } from '@fuxui/time';
</script>

<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
```

## Credits

- Based on [svelte-relative-time](https://github.com/CaptainCodeman/svelte-relative-time)
