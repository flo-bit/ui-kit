<script lang="ts">
	import ScrollArea from '$lib/components/scroll-area/ScrollArea.svelte';

	let { children } = $props();
</script>

<div class="lg:ml-72 xl:ml-80">
	<ScrollArea type="scroll" class="h-[100dvh] w-full" scrollbarYClasses="z-50">
		<div class="mx-auto flex w-full max-w-xl flex-col items-start justify-center gap-2 px-4 py-24">
			{@render children?.()}
		</div>
	</ScrollArea>
</div>
