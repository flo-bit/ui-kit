<script lang="ts">
	import { cn } from '../../utils';
	import { Select, type WithoutChildren } from 'bits-ui';

	type Props = WithoutChildren<Select.RootProps> & {
		placeholder?: string;
		items: { value: string; label: string; disabled?: boolean }[];
		contentProps?: WithoutChildren<Select.ContentProps>;
	};

	let { value = $bindable(), items, contentProps, placeholder, ...restProps }: Props = $props();

	const selectedLabel = $derived(items.find((item) => item.value === value)?.label);
</script>

<Select.Root bind:value={value as never} {...restProps}>
	<Select.Trigger>
		<div
			class="bg-accent-500/10 border-accent-700/20 text-accent-800 dark:text-accent-300 inline-flex min-w-28 items-center justify-between gap-1 rounded-2xl border px-3 py-1 font-medium"
		>
			{selectedLabel ? selectedLabel : placeholder}

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="size-4"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</Select.Trigger>
	<Select.Portal>
		<Select.Content
			{...contentProps}
			class={cn(
				'bg-base-50/50 border-base-500/20 overflow-hidden rounded-2xl border shadow-lg backdrop-blur-xl',
				'dark:bg-base-900/50 dark:border-base-500/10',
				'motion-safe:animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				contentProps?.class
			)}
			sideOffset={6}
		>
			<Select.ScrollUpButton>up</Select.ScrollUpButton>
			<Select.Viewport class="divide-base-300 dark:divide-base-800 divide-y text-sm">
				{#each items as { value, label, disabled } (value)}
					<Select.Item {value} {label} {disabled}>
						{#snippet children({ selected })}
							<div
								class={cn(
									'text-base-900 dark:text-base-200 group relative isolate flex min-w-28 cursor-pointer items-center gap-1 px-1 py-2 font-medium',
									selected ? 'text-accent-700' : ''
								)}
							>
								{#if selected}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2.5"
										stroke="currentColor"
										class="size-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="m4.5 12.75 6 6 9-13.5"
										/>
									</svg>
								{:else}
									<div class="size-4"></div>

									<div
										class="group-hover:bg-base-300/20 dark:group-hover:bg-base-700/20 absolute inset-0 -z-10"
									></div>
								{/if}
								{label}
							</div>
						{/snippet}
					</Select.Item>
				{/each}
			</Select.Viewport>
			<Select.ScrollDownButton>down</Select.ScrollDownButton>
		</Select.Content>
	</Select.Portal>
</Select.Root>
