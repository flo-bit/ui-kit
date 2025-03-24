<div class="w-full px-8">
	<div class="gradient-background border-base-500 relative h-4 w-full rounded-2xl border">
		<div
			class="bg-accent-500 border-base-500 absolute -top-3 size-6 rounded-full border"
			style="left: calc(0% - 12px);"
		></div>
		<div
			class="bg-accent-500 border-base-500 absolute -top-3 size-6 rounded-full border"
			style="left: calc(50% - 12px); background: oklch(from var(--color-accent-500) l c calc(h + 30));"
		></div>
		<div
			class="bg-accent-500 border-base-500 absolute -top-3 size-6 rounded-full border"
			style="left: calc(100% - 12px); background: oklch(from var(--color-accent-500) l c calc(h + 60));"
		></div>
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
