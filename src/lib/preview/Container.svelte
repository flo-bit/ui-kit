<script lang="ts">
	let { children } = $props();
</script>

<div class="px-4 py-24 lg:ml-72 xl:ml-80">
	<div class="mx-auto flex w-full max-w-xl flex-col items-start gap-2">
		{@render children?.()}
	</div>
</div>
