<script>
	import { cn, toggleVariants } from '@foxui/all';
	import { ZapOff, Zap } from '@foxui/all/icons';
</script>

<div class="flex gap-4">
	<div class={toggleVariants()}>
		<ZapOff size={24} strokeWidth={2} />
	</div>

	<div class={toggleVariants()} data-state="on">
		<Zap size={24} strokeWidth={2} />
	</div>
</div>
