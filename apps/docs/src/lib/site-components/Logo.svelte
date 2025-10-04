<script lang="ts">
	import { base } from '$app/paths';
	import { Badge, cn } from '@foxui/core';

	let {
		class: className
	}: {
		class?: string;
	} = $props();
</script>

<div class={cn('flex items-center gap-2', className)}>
	<a
		class="text-base-950 dark:text-base-50 focus-visible:outline-base-900 dark:focus-visible:outline-base-50 rounded-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
		href={base}>🦊 fox ui</a
	>
	<Badge>alpha</Badge>
</div>
