<script>
	import { Prose } from '@foxui/core';
</script>

<div class="w-full">
	<Prose>
		<h2>This is a heading</h2>
		<h3>And a subheading</h3>
		<p class="relative w-fit">
			This is my text, see <span class="text-accent-600 dark:text-accent-400 font-semibold"
				>this link</span
			>

			<span
				class="bg-accent-600 dark:bg-accent-500 cursor absolute -right-1 bottom-0 top-0 h-full w-[calc(var(--spacing)*0.5)]"
			></span>
		</p>
	</Prose>
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
