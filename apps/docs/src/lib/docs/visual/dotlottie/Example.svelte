<script lang="ts">
	import { DotLottie, Box } from '@foxui/all';

	const slots = {
		'driver-mint-dark': 'var(--color-accent-700)',
		'driver-mint-mid': 'var(--color-accent-500)',
		'driver-mint-light': 'var(--color-accent-300)'
	};
</script>

<Box class="not-prose flex items-center justify-center">
	<DotLottie src="/example.lottie" {slots} class="aspect-video max-w-xl" />
</Box>
