<script lang="ts">
	import { launchConfetti } from '@fuxui/visual';
	import { Button } from '@fuxui/base';
	import { onMount } from 'svelte';

	onMount(() => {
		launchConfetti();
	});
</script>

<Button onclick={() => launchConfetti()}>Launch Confetti</Button>
