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

<div bind:this={ref} class={cn("prose-base-color", proseVariants({ size }), className)} {...restProps}>
	{@render children?.()}
</div>