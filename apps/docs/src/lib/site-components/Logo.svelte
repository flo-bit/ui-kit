<script lang="ts">
	import { resolve } from '$app/paths';
	import { Badge, cn } from '@foxui/all';

	let {
		class: className
	}: {
		class?: string;
	} = $props();
</script>

<div class={cn('flex items-center gap-2', className)}>
	<a
		class="text-base-950 dark:text-base-50 focus-visible:outline-base-900 dark:focus-visible:outline-base-50 rounded-ui-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 flex gap-2"
		href={resolve('/')}>🦊 <span class="hidden sm:block">fox ui</span></a
	>
	<Badge>alpha</Badge>
</div>
