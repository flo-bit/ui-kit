<script lang="ts">
	import { Popover, Button, toast } from '@fuxui/base';

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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</Button>

			<Button
				size="iconSm"
				onclick={() => {
					open = !open;
					toast('Good choice!');
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
				</svg>
			</Button>
		</div>
	</div>
</Popover>
