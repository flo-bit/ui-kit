<script lang="ts">
	import IconsDocs from './Icons.md';
	import { Prose } from '@foxui/all';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/icons/llms.txt" />
</div>

<Prose>
	<IconsDocs />
</Prose>
