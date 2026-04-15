<script lang="ts">
	import { Lottie, Box } from '@foxui/all';

	const colorMap = {
		'#53aaa7': 'var(--color-accent-500)',
		'#6294a1': 'var(--color-accent-600)',
		'#6dd3cd': 'var(--color-accent-400)',
		'#8dcaac': 'var(--color-accent-400)',
		'#a7e2c4': 'var(--color-accent-300)',
		'#bd91b6': 'var(--color-accent-300)',
		'#dba9d3': 'var(--color-accent-200)',
		'#edc9e9': 'var(--color-accent-100)',
		'#fa7563': 'var(--color-accent-700)',
		'#dec579': 'var(--color-accent-200)',
		'#494f5c': 'var(--color-base-800)',
		'#749ca8': 'var(--color-accent-600)',
		'#fbf6ec': 'var(--color-base-50)'
	};
</script>

<Box class="not-prose flex items-center justify-center">
	<Lottie src="/example.lottie.json" {colorMap} class="aspect-video max-w-xl" />
</Box>
