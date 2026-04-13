<script lang="ts">
	import { cn } from '../../utils';
	import { Select as SelectPrimitive, type WithoutChildren } from 'bits-ui';
	import { ChevronDown, Check } from '@jis3r/icons';

	type Props = WithoutChildren<SelectPrimitive.RootProps> & {
		placeholder?: string;
		items: { value: string; label: string; disabled?: boolean }[];
		contentProps?: WithoutChildren<SelectPrimitive.ContentProps>;
	};

	let { value = $bindable(), items, contentProps, placeholder, ...restProps }: Props = $props();

	const selectedLabel = $derived(items.find((item) => item.value === value)?.label);
</script>

<SelectPrimitive.Root bind:value={value as never} {...restProps}>
	<SelectPrimitive.Trigger>
		<div
			class="bg-accent-500/10 border-accent-700/20 text-accent-800 dark:text-accent-300 inline-flex min-w-28 items-center justify-between gap-1 rounded-ui border px-3 py-1 font-medium transition-colors hover:bg-accent-500/15 dark:hover:bg-accent-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
		>
			{selectedLabel ? selectedLabel : placeholder}

			<ChevronDown size={16} strokeWidth={2.5} />
		</div>
	</SelectPrimitive.Trigger>
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			{...contentProps}
			class={cn(
				'bg-base-50/50 border-base-500/20 overflow-hidden rounded-ui border shadow-lg backdrop-blur-xl',
				'dark:bg-base-900/50 dark:border-base-500/10',
				'motion-safe:animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				contentProps?.class
			)}
			sideOffset={6}
		>
			<SelectPrimitive.ScrollUpButton>up</SelectPrimitive.ScrollUpButton>
			<SelectPrimitive.Viewport class="divide-base-300 dark:divide-base-800 divide-y text-sm">
				{#each items as { value, label, disabled } (value)}
					<SelectPrimitive.Item {value} {label} {disabled}>
						{#snippet children({ selected })}
							<div
								class={cn(
									'text-base-900 dark:text-base-200 group relative isolate flex min-w-28 cursor-pointer items-center gap-1 px-1 py-2 font-medium',
									selected ? 'text-accent-700' : ''
								)}
							>
								{#if selected}
									<Check size={16} strokeWidth={2.5} />
								{:else}
									<div class="size-4"></div>

									<div
										class="group-hover:bg-base-300/20 dark:group-hover:bg-base-700/20 absolute inset-0 -z-10"
									></div>
								{/if}
								{label}
							</div>
						{/snippet}
					</SelectPrimitive.Item>
				{/each}
			</SelectPrimitive.Viewport>
			<SelectPrimitive.ScrollDownButton>down</SelectPrimitive.ScrollDownButton>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
</SelectPrimitive.Root>
