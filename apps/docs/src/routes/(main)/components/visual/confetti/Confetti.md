<script lang="ts">
	import ConfettiExample from './Example.svelte';
</script>

# Confetti

## Example

<ConfettiExample />

## Usage

```svelte
<script lang="ts">
	import { launchConfetti } from '@foxui/visual';
</script>

<Button onclick={() => launchConfetti()}>Launch Confetti</Button>
```