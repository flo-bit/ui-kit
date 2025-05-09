<div class="text-base-900 dark:text-base-100 relative h-fit w-fit text-xl font-medium">
	Hello there

	<div
		class="bg-accent-600 dark:bg-accent-500 cursor absolute -right-1 bottom-0 top-0 h-full w-[calc(var(--spacing)*0.5)]"
	></div>
</div>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
	.cursor {
		animation: blink 1s step-end infinite;
	}
</style>
