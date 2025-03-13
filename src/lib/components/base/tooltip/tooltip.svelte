<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { type Snippet } from 'svelte';
	import { TooltipContent } from '.';

	type Props = Tooltip.RootProps & {
		withContext?: boolean;

		triggerProps?: Tooltip.TriggerProps;

		content?: Snippet;
		text?: string;
	} & Tooltip.TriggerProps;

	let {
		open = $bindable(false),
		child: myChild,

		withContext = false,

		triggerProps = {},

		content,
		text,
		...restProps
	}: Props = $props();
</script>

{#snippet root()}
	<Tooltip.Root bind:open {...restProps}>
		<Tooltip.Trigger {...triggerProps}>
			{#snippet child({ props })}
				{@render myChild?.({ props })}
			{/snippet}
		</Tooltip.Trigger>

		<Tooltip.Portal>
			<TooltipContent sideOffset={10}>
				{#if content}
					{@render content()}
				{:else}
					{text}
				{/if}
			</TooltipContent>
		</Tooltip.Portal>
	</Tooltip.Root>
{/snippet}

{#if withContext}
	<Tooltip.Provider>
		{@render root()}
	</Tooltip.Provider>
{:else}
	{@render root()}
{/if}
