<script lang="ts">
	import { cn } from '$lib';
	import type { Snippet } from 'svelte';

	const { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<div
	class={cn(
		'isolate bg-accent-500 relative h-[712px] w-[350px] max-w-full rounded-[60px] aspect-[350/712]',
		className
	)}
>
	<div class="bg-accent-500 absolute top-20 -left-0.5 h-8 w-3 rounded-xs"></div>
	<div class="bg-accent-500 absolute top-[140px] -left-[3px] h-14 w-3 rounded-xs"></div>
	<div class="bg-accent-500 absolute top-[210px] -left-[3px] h-14 w-3 rounded-xs"></div>
	<div class="bg-accent-500 absolute top-[180px] -right-[3px] h-20 w-3 rounded-xs"></div>

	<div class="absolute top-[18px] z-10 flex w-full justify-center">
		<div class="h-7 w-24 rounded-full bg-black"></div>
	</div>

	<div class="bg-accent-500 absolute top-[180px] -right-[3px] h-20 w-3 rounded-xs"></div>

	<div class="absolute inset-0 h-full w-full p-3">
		<div class="bg-accent-200 relative h-full w-full overflow-hidden rounded-[50px]">
			{@render children?.()}
		</div>
	</div>
</div>
