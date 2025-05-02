<script lang="ts">
	import { Alert, cn } from '@fuxui/base';

	let { class: className }: { class?: string } = $props();
</script>

<Alert
	title="Public alpha"
	class={cn('not-prose mb-8 w-fit', className)}
	type="warning"
	variant="default"
>
	<span> This is a public alpha release. Expect bugs and breaking changes. </span>
</Alert>
