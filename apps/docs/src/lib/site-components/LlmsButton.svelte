<script lang="ts">
	import { Button } from '@foxui/all';
	import { FileText } from '@foxui/all/moving-icons';
	import { resolve } from '$app/paths';

	let { href }: { href: string } = $props();
	let hovered = $state(false);
</script>

<Button
	size="sm"
	class="not-prose mb-1"
	variant="secondary"
	href={resolve(href)}
	target="_blank"
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
>
	<FileText size={16} strokeWidth={2} animate={hovered} />
	<span>llms.txt</span>
</Button>
