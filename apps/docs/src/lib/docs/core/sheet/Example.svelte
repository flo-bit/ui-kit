<script lang="ts">
	import { Button, Sheet, Input, Label } from '@foxui/all';

	let open = $state(false);
	let side: 'top' | 'right' | 'bottom' | 'left' = $state('right');

	const sides = ['top', 'right', 'bottom', 'left'] as const;
</script>

<div class="flex flex-wrap gap-2">
	{#each sides as s (s)}
		<Button
			variant="secondary"
			onclick={() => {
				side = s;
				open = true;
			}}
		>
			Open {s}
		</Button>
	{/each}
</div>

<Sheet
	bind:open
	{side}
	title="Edit profile"
	description="Make changes to your profile here. Click save when you're done."
>
	<div class="flex flex-col gap-4 py-2">
		<div class="flex flex-col gap-2">
			<Label for="sheet-name">Name</Label>
			<Input id="sheet-name" value="Pedro Duarte" />
		</div>
		<div class="flex flex-col gap-2">
			<Label for="sheet-username">Username</Label>
			<Input id="sheet-username" value="@peduarte" />
		</div>
	</div>

	{#snippet footer()}
		<Button variant="secondary" onclick={() => (open = false)}>Cancel</Button>
		<Button onclick={() => (open = false)}>Save changes</Button>
	{/snippet}
</Sheet>
