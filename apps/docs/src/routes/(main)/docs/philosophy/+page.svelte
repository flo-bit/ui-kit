<script>
	import { Prose } from '@foxui/all';
	import Philosophy from './Philosophy.md';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/philosophy/llms.txt" />
</div>

<Prose>
	<Philosophy />
</Prose>
