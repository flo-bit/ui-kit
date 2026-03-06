<script>
	import { Tooltip, Button, toast } from '@foxui/all';

	function handleClick() {
		toast.error("Don't click, just hover!");
	}
</script>

<div class="flex w-full flex-col items-start gap-2 py-12">
	<Tooltip text="Hello there!" withContext>
		{#snippet child({ props })}
			<Button {...props} onclick={handleClick}>Hover me</Button>
		{/snippet}
	</Tooltip>
</div>
