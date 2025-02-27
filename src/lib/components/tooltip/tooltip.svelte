<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { type Snippet } from 'svelte';
	import { buttonVariants, type ButtonSize, type ButtonVariant } from '../button';
	import { TooltipContent } from '.';

	type Props = Tooltip.RootProps & {
		trigger?: Snippet;

		triggerText?: string;
		triggerVariant?: ButtonVariant;
		triggerSize?: ButtonSize;
		triggerClass?: string;

		withContext?: boolean;

		triggerProps?: Tooltip.TriggerProps;
	};

	let {
		open = $bindable(false),
		children,
		trigger,
		triggerText,
		triggerVariant = 'primary',
		triggerSize = 'default',
		triggerClass,

		withContext = false,

		triggerProps = {},
		...restProps
	}: Props = $props();
</script>

{#snippet root()}
	<Tooltip.Root bind:open {...restProps}>
		{#if trigger}
			<Tooltip.Trigger {...triggerProps}>
				{@render trigger()}
			</Tooltip.Trigger>
		{:else}
			<Tooltip.Trigger
				class={[buttonVariants({ variant: triggerVariant, size: triggerSize }), triggerClass]}
			>
				{triggerText}
			</Tooltip.Trigger>
		{/if}
		<Tooltip.Portal>
			<TooltipContent sideOffset={10}>
				{@render children?.()}
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
