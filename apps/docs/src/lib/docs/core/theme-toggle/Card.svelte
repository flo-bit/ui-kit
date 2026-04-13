<script>
	import { cn, toggleVariants } from '@foxui/all';
	import { Sun, Moon } from '@foxui/all/icons';
</script>

<div class="flex gap-4">
	<Sun size={20} strokeWidth={1.5} class="block transition-colors duration-500" />

	<Moon
		size={20}
		strokeWidth={1.5}
		class="transition-colors duration-500 dark:block dark:text-white"
	/>
</div>
