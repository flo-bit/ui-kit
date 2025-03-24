<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Progress } from '$lib/components/extra/progress';
	import { PulseLoader } from '$lib/components/extra/pulse-loader';
	import { Paragraph } from '$lib/components/base/paragraph';

	let progress = $state(20);

	$effect(() => {
		setInterval(() => {
			progress = progress > 100 ? 0 : progress + Math.random() * 40;
		}, 500);
	});
</script>

<Subheading class="mb-2">Loader</Subheading>
<Paragraph class="mt-4 mb-2">Bar Loader</Paragraph>

<Progress {progress} />

<Paragraph class="mt-4 mb-2">Pulse Loader</Paragraph>

<PulseLoader />
