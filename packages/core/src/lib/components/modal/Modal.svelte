<script lang="ts" module>
	import { Dialog, type WithoutChild } from 'bits-ui';
	import { X } from '@jis3r/icons';
	import { cn } from '../../utils.js';

	export type ModalProps = Dialog.RootProps & {
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
		children,
		contentProps,
		interactOutsideBehavior = 'close',
		closeButton = true,
		class: className,
		onOpenAutoFocus,
		...restProps
	}: ModalProps = $props();
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
			class={cn(
				'motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
				'fixed top-[50%] left-[50%] z-50 grid w-[calc(100%-1rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] shadow-lg',
				'border-base-200 bg-base-100 dark:border-base-700 dark:bg-base-800 gap-4 rounded-ui border p-6 backdrop-blur-xl',
				className
			)}
		>
			{@render children?.()}

			{#if closeButton}
				<Dialog.Close
					class="text-base-900 dark:text-base-500 hover:text-base-800 dark:hover:text-base-200 hover:bg-base-200 dark:hover:bg-base-800 focus:outline-base-900 dark:focus:outline-base-50 focus:bg-base-200 dark:focus:bg-base-800 focus:text-base-800 dark:focus:text-base-200 absolute top-2 right-2 cursor-pointer rounded-ui-sm p-1 transition-colors focus:outline-2 focus:outline-offset-2"
				>
					<X size={16} />
					<span class="sr-only">Close</span>
				</Dialog.Close>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
