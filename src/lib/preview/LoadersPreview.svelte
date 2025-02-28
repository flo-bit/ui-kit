<script>
	import { Subheading } from '$lib/components/heading';
	import { Progress } from '$lib/components/progress';
	import { PulseLoader } from '$lib/components/pulse-loader';
	import { Text } from '$lib/components/text';

	let progress = $state(20);

	$effect(() => {
		setInterval(() => {
			progress = progress > 100 ? 0 : progress + Math.random() * 40;
		}, 500);
	});
</script>

<Subheading class="mb-2">Loader</Subheading>
<Text class="mt-4 mb-2">Bar Loader</Text>

<Progress {progress} />

<Text class="mt-4 mb-2">Pulse Loader</Text>

<PulseLoader />
