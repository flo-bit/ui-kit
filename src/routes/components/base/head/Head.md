# Head

Sets title, description, open graph image, url and emoji favicon.

It's recommended to add this to your root layout.

## Usage

```svelte
<script>
	import { Head } from 'fox-ui-svelte';
</script>

<Head
	title="Website Title"
	description="Website Description"
	image={"open-graph-image.png"}
	url="https://website-url.com"
	emojiFavicon="🦊"
/>
```
