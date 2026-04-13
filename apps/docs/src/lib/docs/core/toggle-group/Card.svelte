<script>
	import { cn, toggleVariants } from '@foxui/all';
	import { Bold, Italic, Underline, Strikethrough } from '@foxui/all/icons';
</script>

<div class="flex gap-2">
	<div class={toggleVariants()} data-state="on">
		<Bold size={24} strokeWidth={2} />
	</div>

	<div class={toggleVariants()} data-state="on">
		<Italic size={24} strokeWidth={2} />
	</div>
	<div class={toggleVariants()}>
		<Underline size={24} strokeWidth={2} />
	</div>
	<div class={toggleVariants()}>
		<Strikethrough size={24} strokeWidth={2} />
	</div>
</div>
