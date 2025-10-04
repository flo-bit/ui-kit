<script lang="ts">
	import { launchConfetti } from '@foxui/visual';
	import { Button } from '@foxui/core';
	import { onMount } from 'svelte';

	onMount(() => {
		launchConfetti();
	});
</script>

<Button onclick={() => launchConfetti()}>Launch Confetti</Button>
