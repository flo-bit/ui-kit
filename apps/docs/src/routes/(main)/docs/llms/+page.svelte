<script lang="ts">
	import Intro from './Intro.md';
	import Rest from './Rest.md';
	import { Prose } from '@foxui/all';
	import LlmsButton from '$lib/site-components/LlmsButton.svelte';
	import CopyUrl from '$lib/site-components/CopyUrl.svelte';
</script>

<div class="mb-2 flex justify-end">
	<LlmsButton href="/docs/llms/llms.txt" />
</div>

<Prose>
	<Intro />
	<div class="not-prose my-4">
		<CopyUrl url="https://flo-bit.dev/ui-kit/docs/llms.txt" />
	</div>
	<Rest />
</Prose>
