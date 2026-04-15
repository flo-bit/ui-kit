<script lang="ts">
	import { AnimatedText, Box, Button } from '@foxui/all';

	const fonts = ['caveat', 'italianno', 'tangerine', 'parisienne'] as const;
	const texts = ['Hello world', 'Fancy handwriting', 'Sweet & Tangy', 'Elegant script'];

	let index = $state(0);
	let runId = $state(0);

	const font = $derived(fonts[index]);
	const text = $derived(texts[index]);

	function next() {
		index = (index + 1) % fonts.length;
		runId++;
	}
</script>

<Box class="not-prose flex flex-col items-center gap-8 py-8">
	<div class="flex h-24 w-full items-center justify-center">
		{#key runId}
			<AnimatedText {text} {font} loop={false} speed={3} style="font-size: 64px" />
		{/key}
	</div>

	<Button onclick={next}>Next font ({font})</Button>
</Box>
