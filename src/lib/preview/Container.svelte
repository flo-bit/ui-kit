<script lang="ts">
	let { children } = $props();
</script>

<div class="h-[100dvh] lg:ml-72 xl:ml-80">
	<div class="mx-auto flex w-full max-w-2xl flex-col items-start justify-center gap-2 px-4 py-24">
		{@render children?.()}
	</div>
</div>
