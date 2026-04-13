<script lang="ts">
	import { Popover, Button, toast } from '@foxui/all';
	import { Check, X } from '@foxui/all/icons';

	let open = $state(false);

	let colors = [
		{ label: '1', value: 'oklch(from var(--color-accent-500) l c h)' },
		{ label: '2', value: 'oklch(from var(--color-accent-500) l c calc(h + 40))' },
		{ label: '3', value: 'oklch(from var(--color-accent-500) l c calc(h + 80))' }
	];
</script>

<h3>Default trigger</h3>

<Popover triggerText="click me" triggerVariant="secondary" triggerClasses="mt-2" bind:open>
	<div class="flex items-center justify-between gap-2">
		<div>Are you sure?</div>
		<div>
			<Button
				variant="secondary"
				size="iconSm"
				onclick={() => {
					open = !open;
					toast('Fair enough!');
				}}
			>
				<X size={24} strokeWidth={1.5} />
			</Button>

			<Button
				size="iconSm"
				onclick={() => {
					open = !open;
					toast('Good choice!');
				}}
			>
				<Check size={24} strokeWidth={1.5} />
			</Button>
		</div>
	</div>
</Popover>
