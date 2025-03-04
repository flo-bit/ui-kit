<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Dialog, type WithoutChild } from 'bits-ui';
	import { Button, buttonVariants, type ButtonProps } from '../button';
	import { cn } from '$lib/utils';

	type Props = Dialog.RootProps & {
		title?: string;
		titleSnippet?: Snippet;
		titleClass?: string;
		description?: string;
		descriptionSnippet?: Snippet;
		descriptionClass?: string;
		interactOutsideBehavior?: 'close' | 'ignore';
		closeButton?: boolean;
		contentProps?: WithoutChild<Dialog.ContentProps>;

		yesButton?:
			| boolean
			| {
					label?: string;
					onclick?: () => void;
					variant?: ButtonProps['variant'];
					disabled?: boolean;
					class?: string;
			  };

		noButton?:
			| boolean
			| {
					label?: string;
					onclick?: () => void;
					variant?: ButtonProps['variant'];
					disabled?: boolean;
					class?: string;
			  };

		class?: string;

		onOpenAutoFocus?: (event: Event) => void;
	};

	let {
		open = $bindable(false),
		children,
		contentProps,
		title,
		titleSnippet,
		titleClass,
		description,
		descriptionSnippet,
		descriptionClass,
		interactOutsideBehavior = 'close',
		closeButton = true,
		yesButton,
		noButton,
		class: className,
		onOpenAutoFocus,
		...restProps
	}: Props = $props();

	let yesButtonRef = $state<HTMLButtonElement | null>(null);
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
				'motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2',
				'fixed left-[50%] z-50 grid w-[calc(100%-1rem)] max-w-lg translate-x-[-50%] top-[50%] translate-y-[-50%]',
				'bg-base-50 dark:bg-base-900 border-base-200/80 dark:border-base-800 gap-4 rounded-2xl border p-6',
				className
			)}
		>
			{#if title}
				<Dialog.Title class="text-base-900 dark:text-base-100 text-lg font-semibold"
					>{title}</Dialog.Title
				>
			{/if}
			{#if titleSnippet}
				<Dialog.Title class={titleClass}>
					{@render titleSnippet()}
				</Dialog.Title>
			{/if}
			{#if description}
				<Dialog.Description class="text-base-600 dark:text-base-400 text-sm"
					>{description}</Dialog.Description
				>
			{/if}
			{#if descriptionSnippet}
				<Dialog.Description class={descriptionClass}>
					{@render descriptionSnippet?.()}
				</Dialog.Description>
			{/if}

			{#if yesButton || noButton}
				<div class="flex flex-col items-stretch justify-end gap-2 md:flex-row md:items-center">
					{#if yesButton}
						<Button
							bind:ref={yesButtonRef}
							onclick={() => {
								open = false;
								if (typeof yesButton === 'object') {
									yesButton.onclick?.();
								}
							}}
							class={cn('order-last', typeof yesButton === 'object' ? yesButton.class : '')}
							variant={typeof yesButton === 'object' ? yesButton?.variant || 'primary' : 'primary'}
							disabled={typeof yesButton === 'object' ? yesButton?.disabled : false}
						>
							{typeof yesButton === 'object' ? yesButton.label || 'Yes' : 'Yes'}
						</Button>
					{/if}
					{#if noButton}
						<Button
							onclick={() => {
								open = false;
								if (typeof noButton === 'object') {
									noButton.onclick?.();
								}
							}}
							class={cn(typeof noButton === 'object' ? noButton.class : '')}
							variant={typeof noButton === 'object'
								? noButton?.variant || 'secondary'
								: 'secondary'}
							disabled={typeof noButton === 'object' ? noButton?.disabled : false}
						>
							{typeof noButton === 'object' ? noButton.label || 'No' : 'No'}
						</Button>
					{/if}
				</div>
			{/if}

			{@render children?.()}

			{#if closeButton}
				<Dialog.Close
					class="text-base-900 dark:text-base-500 hover:text-base-800 dark:hover:text-base-200 hover:bg-base-200 dark:hover:bg-base-800 focus:outline-base-900 dark:focus:outline-base-50 focus:bg-base-200 dark:focus:bg-base-800 focus:text-base-800 dark:focus:text-base-200 absolute top-2 right-2 cursor-pointer rounded-xl p-1 transition-colors focus:outline-2 focus:outline-offset-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="size-4"
					>
						<path
							fill-rule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
					</svg>

					<span class="sr-only">Close</span>
				</Dialog.Close>
			{/if}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
