<script lang="ts">
	import Example from './Example.svelte';
</script>

# Bluesky Login

## Example

<Example />

## Usage

```svelte
<script lang="ts">
	import { BlueskyLogin } from '@fuxui/social';
</script>

<BlueskyLogin login={async (handle) => {
	// do login and return true if login 
	// is successful and should hide the modal
}} />
```
