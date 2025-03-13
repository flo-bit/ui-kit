<script>
	import { Subheading } from '$lib/components/base/heading';
	import { Progress } from '$lib/components/extra/progress';

	let progress = $state(20);

	$effect(() => {
		setInterval(() => {
			progress = progress > 100 ? 0 : progress + Math.random() * 40;
		}, 1000);
	});
</script>

<Subheading class="mb-8">Progress</Subheading>

<Progress {progress} />
