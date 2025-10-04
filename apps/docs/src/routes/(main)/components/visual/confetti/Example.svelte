<script lang="ts">
	import { launchConfetti } from '@foxui/all';
	import { Button } from '@foxui/all';
	import { onMount } from 'svelte';

	onMount(() => {
		launchConfetti();
	});
</script>

<Button onclick={() => launchConfetti()}>Launch Confetti</Button>
