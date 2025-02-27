<script lang="ts">
	const { children } = $props();
</script>

<div class="relative mx-auto h-[712px] w-[350px] max-w-full rounded-[60px] bg-accent-500">
	<div class="absolute -left-0.5 top-20 h-8 w-3 rounded-sm bg-accent-500"></div>
	<div class="absolute -left-[3px] top-[140px] h-14 w-3 rounded-sm bg-accent-500"></div>
	<div class="absolute -left-[3px] top-[210px] h-14 w-3 rounded-sm bg-accent-500"></div>
	<div class="absolute -right-[3px] top-[180px] h-20 w-3 rounded-sm bg-accent-500"></div>

	<div class="absolute top-[18px] z-10 flex w-full justify-center">
		<div class="h-7 w-24 rounded-full bg-black"></div>
	</div>

	<div class="absolute -right-[3px] top-[180px] h-20 w-3 rounded-sm bg-accent-500"></div>

	<div class="absolute inset-0 h-full w-full p-3">
		<div class="relative h-full w-full overflow-hidden rounded-[50px] bg-accent-200">
			{@render children?.()}
		</div>
	</div>
</div>
