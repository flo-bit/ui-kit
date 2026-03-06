<script>
	import { Alert } from '@foxui/all';
</script>

<Alert type="info" title="This component is unstyled by default." variant="default" class="mt-4">
</Alert>

## Usage

```svelte
<RelativeTime date={new Date(Date.now() - 10000)} locale="en-US" />
```

## Credits

- Based on [svelte-relative-time](https://github.com/CaptainCodeman/svelte-relative-time)
