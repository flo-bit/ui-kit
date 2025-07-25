<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	export const proseVariants = tv({
		base: 'prose dark:prose-invert prose-a:no-underline prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-pre:rounded-2xl w-full max-w-none',
		variants: {
			size: {
				default: 'prose-sm',
				md: 'prose-base',
				lg: 'prose-lg',
				xl: 'prose-xl',
				'2xl': 'prose-2xl'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	});

	export type ProseSize = VariantProps<typeof proseVariants>['size'];

	export type ProseProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		size?: ProseSize;
	};
</script>

<script lang="ts">
	let {
		children,
		ref = $bindable(null),
		class: className,
		size = 'default',
		...restProps
	}: ProseProps = $props();
</script>

<div bind:this={ref} class={cn(proseVariants({ size }), className)} {...restProps}>
	{@render children?.()}
</div>

<!-- TODO: this is not actually used right now, we have to fix that -->
<style>
	.prose-base-colors {
		--tw-prose-body: var(--color-base-700);
		--tw-prose-headings: var(--color-base-900);
		--tw-prose-lead: var(--color-base-600);
		--tw-prose-links: var(--color-base-900);
		--tw-prose-bold: var(--color-base-900);
		--tw-prose-counters: var(--color-base-500);
		--tw-prose-bullets: var(--color-base-300);
		--tw-prose-hr: var(--color-base-200);
		--tw-prose-quotes: var(--color-base-900);
		--tw-prose-quote-borders: var(--color-base-200);
		--tw-prose-captions: var(--color-base-500);
		--tw-prose-kbd: var(--color-base-900);
		--tw-prose-kbd-shadows: var(--color-base-900);
		--tw-prose-code: var(--color-base-900);
		--tw-prose-pre-code: var(--color-base-200);
		--tw-prose-pre-bg: var(--color-base-800);
		--tw-prose-th-borders: var(--color-base-300);
		--tw-prose-td-borders: var(--color-base-200);


		--tw-prose-invert-body: var(--color-base-300);
		--tw-prose-invert-headings: var(--color-white);
		--tw-prose-invert-lead: var(--color-base-400);
		--tw-prose-invert-links: var(--color-white);
		--tw-prose-invert-bold: var(--color-white);
		--tw-prose-invert-counters: var(--color-base-400);
		--tw-prose-invert-bullets: var(--color-base-600);
		--tw-prose-invert-hr: var(--color-base-700);
		--tw-prose-invert-quotes: var(--color-base-100);
		--tw-prose-invert-quote-borders: var(--color-base-700);
		--tw-prose-invert-captions: var(--color-base-400);
		--tw-prose-invert-kbd: var(--color-white);
		--tw-prose-invert-kbd-shadows: var(--color-white);
		--tw-prose-invert-code: var(--color-white);
		--tw-prose-invert-pre-code: var(--color-base-300);
		--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
		--tw-prose-invert-th-borders: var(--color-base-600);
		--tw-prose-invert-td-borders: var(--color-base-700);
	}

	.prose-base-colors-dark {
		--tw-prose-invert-body: var(--color-base-300);
		--tw-prose-invert-headings: var(--color-white);
		--tw-prose-invert-lead: var(--color-base-400);
		--tw-prose-invert-links: var(--color-white);
		--tw-prose-invert-bold: var(--color-white);
		--tw-prose-invert-counters: var(--color-base-400);
		--tw-prose-invert-bullets: var(--color-base-600);
		--tw-prose-invert-hr: var(--color-base-700);
		--tw-prose-invert-quotes: var(--color-base-100);
		--tw-prose-invert-quote-borders: var(--color-base-700);
		--tw-prose-invert-captions: var(--color-base-400);
		--tw-prose-invert-kbd: var(--color-white);
		--tw-prose-invert-kbd-shadows: var(--color-white);
		--tw-prose-invert-code: var(--color-white);
		--tw-prose-invert-pre-code: var(--color-base-300);
		--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
		--tw-prose-invert-th-borders: var(--color-base-600);
		--tw-prose-invert-td-borders: var(--color-base-700);
	}
</style>
