<script lang="ts">
	import { base } from '$app/paths';
	import { cn } from '$lib';
	import { Badge } from '$lib/components/base/badge';

	let { class: className }: {
		class?: string;
	} = $props();
</script>

<div class={cn("flex items-center gap-2", className)}>
	<a class="font-semibold text-base-950 dark:text-base-50" href={base}>🦊 fox ui</a>
	<Badge>alpha</Badge>
</div>
