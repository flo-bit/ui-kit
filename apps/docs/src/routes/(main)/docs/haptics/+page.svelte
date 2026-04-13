<script lang="ts">
	import HapticsDocs from './Haptics.md';
	import { Prose } from '@foxui/all';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/haptics/llms.txt" />
</div>

<Prose>
	<HapticsDocs />
</Prose>
