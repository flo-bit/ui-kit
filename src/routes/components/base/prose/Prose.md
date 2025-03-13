<script>
	import Box from '$lib/components/base/box/Box.svelte';
</script>

# Prose

## Example

<Box>
	<h1>Prose</h1>
	<p>Prose is a component that renders html tags with automatic styles applied.</p>
	<p>It is useful for rendering markdown content.</p>
	
	<p>This is a link: <a href="https://google.com">Google</a></p>
</Box>


## Usage

```svelte
<script>
	import Prose from 'fox-ui-svelte';
</script>

<Prose>
	<h1>Prose</h1>

	<p>
		Prose is a component
	</p>
</Prose>
```