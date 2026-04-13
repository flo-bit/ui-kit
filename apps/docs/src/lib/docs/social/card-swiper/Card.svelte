<script>
	import { Button } from '@foxui/all';
	import { X, Heart } from '@foxui/all/icons';
</script>

<div class="relative flex p-8">
	<div
		class="bg-base-200/50 dark:bg-base-800/50 border-base-300/50 dark:border-base-700/50 h-24 w-16 rounded-ui-sm border p-4"
	></div>
	<div
		class="bg-base-200 dark:bg-base-800 border-base-300 dark:border-base-700 -ml-8 h-24 w-16 rotate-12 rounded-ui-sm border p-4"
	></div>

	<div class="absolute bottom-2 -ml-10 flex w-full justify-between px-2">
		<Button size="iconSm">
			<X size={24} strokeWidth={2.5} />
		</Button>
		<Button size="iconSm">
			<Heart size={24} strokeWidth={2} />
		</Button>
	</div>
</div>
