<script lang="ts">
	import Example from './Example.svelte';
</script>

# Atproto Login

## Example

<Example />

## Usage

### Add modal to your `+layout.svelte`

```svelte
<script lang="ts">
	import { AtprotoLoginModal } from '@foxui/social';
</script>

<AtprotoLoginModal
	login={async (handle) => {
		// do login and return true if login
		// is successful and should hide the modal
	}}
	signup={async () => {
		// do signup and return true if signup
		// is successful and should hide the modal
	}}
/>
```

### Open the modal

```svelte
<script lang="ts">
	import { atProtoLoginModalState, Button } from '@foxui/all';
</script>

<Button onclick={() => atProtoLoginModalState.show()}>Login</Button>
```