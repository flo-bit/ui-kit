<script>
	import { Prose } from '@foxui/all';
</script>

<div class="w-full">
	<Prose>
		<h3>Core Editor</h3>
		<p class="relative w-fit">
			The foundation for rich text
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
