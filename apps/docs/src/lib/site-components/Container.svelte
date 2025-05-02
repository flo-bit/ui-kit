<script lang="ts">
	let { children, ...restProps } = $props();
</script>

<div class="h-[100dvh] px-4 lg:ml-72 xl:ml-80" {...restProps}>
	<div class="mx-auto flex w-full max-w-2xl flex-col items-start justify-center gap-2 py-24">
		{@render children?.()}
	</div>
</div>
