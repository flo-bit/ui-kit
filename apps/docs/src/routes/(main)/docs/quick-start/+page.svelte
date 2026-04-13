<script>
	import { Prose } from '@foxui/all';
	import QuickStart from './QuickStart.md';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/quick-start/llms.txt" />
</div>

<Prose>
	<QuickStart />
</Prose>
