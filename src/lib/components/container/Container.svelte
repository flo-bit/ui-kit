<script lang="ts">
	import ScrollArea from '$lib/components/scroll-area/ScrollArea.svelte';

	let { children } = $props();
</script>

<ScrollArea type="scroll" class="h-[100dvh] w-full" scrollbarYClasses="z-50">
	<div class="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-2 px-4 py-24">
		{@render children?.()}
	</div>
</ScrollArea>
