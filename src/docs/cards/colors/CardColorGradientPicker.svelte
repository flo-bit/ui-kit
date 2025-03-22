<div class="px-8 w-full">
<div class="gradient-background h-4 w-full rounded-2xl relative border border-base-500">
	<div class="absolute size-6 bg-accent-500 rounded-full border border-base-500 -top-3" style="left: calc(0% - 12px);"></div>
	<div class="absolute size-6 bg-accent-500 rounded-full border border-base-500 -top-3" style="left: calc(50% - 12px); background: oklch(from var(--color-accent-500) l c calc(h + 30));"></div>
	<div class="absolute size-6 bg-accent-500 rounded-full border border-base-500 -top-3" style="left: calc(100% - 12px); background: oklch(from var(--color-accent-500) l c calc(h + 60));"></div>
</div>
</div>

<style>
	/* background gradient */
	.gradient-background {
		background: linear-gradient(
			to right,
			var(--color-accent-500),
			oklch(from var(--color-accent-500) l c calc(h + 30)),
			oklch(from var(--color-accent-500) l c calc(h + 60))
		);
	}
</style>
