<script lang="ts">
	import Example from './Example.svelte';
	import { Alert } from '@foxui/core';
</script>

# Relative Time

<Alert type="info" title="This component is unstyled by default." variant="default">
</Alert>

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { RelativeTime } from '@foxui/time';
</script>

<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
```

## Credits

- Based on [svelte-relative-time](https://github.com/CaptainCodeman/svelte-relative-time)
