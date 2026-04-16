<script lang="ts" module>
	import { Dialog, type WithoutChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { X } from '@jis3r/icons';
	import { cn } from '../../utils.js';

	export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

	export type SheetProps = Dialog.RootProps & {
		side?: SheetSide;
		title?: string;
		description?: string;
		footer?: Snippet;
		interactOutsideBehavior?: 'close' | 'ignore';
		closeButton?: boolean;
		contentProps?: WithoutChild<Dialog.ContentProps>;

		class?: string;

		onOpenAutoFocus?: (event: Event) => void;
	};
</script>

<script lang="ts">
	let {
		open = $bindable(false),
		side = 'right',
		title,
		description,
		footer,
		children,
		contentProps,
		interactOutsideBehavior = 'close',
		closeButton = true,
		class: className,
		onOpenAutoFocus,
		...restProps
	}: SheetProps = $props();
</script>

<Dialog.Root bind:open {...restProps}>
	<Dialog.Portal>
		<Dialog.Overlay
			class="motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-base-200/10 dark:bg-base-900/10 fixed inset-0 z-50 backdrop-blur-sm"
		/>
		<Dialog.Content
			{onOpenAutoFocus}
			{interactOutsideBehavior}
			{...contentProps}
			data-side={side}
			class={cn(
				'motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
				'border-base-200 bg-base-100 dark:border-base-700 dark:bg-base-800 fixed z-50 flex flex-col gap-4 shadow-lg backdrop-blur-xl',
				'data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:sm:max-w-sm',
				'data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:sm:max-w-sm',
				'data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:border-b',
				'data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:border-t',
				'data-[side=right]:data-[state=open]:slide-in-from-right data-[side=right]:data-[state=closed]:slide-out-to-right',
				'data-[side=left]:data-[state=open]:slide-in-from-left data-[side=left]:data-[state=closed]:slide-out-to-left',
				'data-[side=top]:data-[state=open]:slide-in-from-top data-[side=top]:data-[state=closed]:slide-out-to-top',
				'data-[side=bottom]:data-[state=open]:slide-in-from-bottom data-[side=bottom]:data-[state=closed]:slide-out-to-bottom',
				className
			)}
		>
			{#if title || description}
				<div class="flex flex-col gap-1 p-6 pb-2">
					{#if title}
						<Dialog.Title class="text-base-900 dark:text-base-100 text-lg font-semibold">
							{title}
						</Dialog.Title>
					{/if}
					{#if description}
						<Dialog.Description class="text-base-600 dark:text-base-400 text-sm">
							{description}
						</Dialog.Description>
					{/if}
				</div>
			{/if}

			<div class="flex-1 overflow-y-auto px-6 {title || description ? '' : 'pt-6'}">
				{@render children?.()}
			</div>

			{#if footer}
				<div class="flex flex-col-reverse gap-2 p-6 pt-2 sm:flex-row sm:justify-end">
					{@render footer()}
				</div>
			{/if}

			{#if closeButton}
				<Dialog.Close
					class="text-base-900 dark:text-base-500 hover:text-base-800 dark:hover:text-base-200 hover:bg-base-200 dark:hover:bg-base-800 focus:outline-base-900 dark:focus:outline-base-50 focus:bg-base-200 dark:focus:bg-base-800 focus:text-base-800 dark:focus:text-base-200 rounded-ui-sm absolute top-3 right-3 cursor-pointer p-1 transition-colors focus:outline-2 focus:outline-offset-2"
				>
					<X size={16} />
					<span class="sr-only">Close</span>
				</Dialog.Close>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
