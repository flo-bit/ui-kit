<script lang="ts">
	import { Tooltip as TooltipPrimitive } from 'bits-ui';
	import { type Snippet } from 'svelte';
	import { TooltipContent } from '.';

	type Props = TooltipPrimitive.RootProps & {
		withContext?: boolean;

		triggerProps?: TooltipPrimitive.TriggerProps;

		contentProps?: TooltipPrimitive.ContentProps;

		content?: Snippet;
		text?: string;
	} & TooltipPrimitive.TriggerProps;

	let {
		open = $bindable(false),
		child: myChild,

		withContext = false,

		triggerProps = {},

		content,
		contentProps = {},
		text,
		...restProps
	}: Props = $props();
</script>

{#snippet root()}
	<TooltipPrimitive.Root bind:open {...restProps}>
		<TooltipPrimitive.Trigger {...triggerProps}>
			{#snippet child({ props })}
				{@render myChild?.({ props })}
			{/snippet}
		</TooltipPrimitive.Trigger>

		<TooltipPrimitive.Portal>
			<TooltipContent
				sideOffset={contentProps.sideOffset ?? 6}
				side={contentProps.side ?? 'top'}
				class={contentProps.class}
			>
				{#if content}
					{@render content()}
				{:else}
					{text}
				{/if}
			</TooltipContent>
		</TooltipPrimitive.Portal>
	</TooltipPrimitive.Root>
{/snippet}

{#if withContext}
	<TooltipPrimitive.Provider>
		{@render root()}
	</TooltipPrimitive.Provider>
{:else}
	{@render root()}
{/if}
