<script lang="ts">
	import { type WithElementRef } from 'bits-ui';
	import { cn } from '../../utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		orientation?: 'vertical' | 'horizontal' | 'both';
	};

	let {
		ref = $bindable(null),
		orientation = 'vertical',
		class: className,
		children,
		...restProps
	}: Props = $props();

	function getOrientationClasses() {
		if (orientation === 'vertical') return 'overflow-y-scroll';
		if (orientation === 'horizontal') return 'overflow-x-scroll';
		return 'overflow-y-scroll overflow-x-scroll';
	}
</script>

<div class={cn('scrollbar', getOrientationClasses(), className)} {...restProps}>
	{@render children?.()}
</div>

<style>
	.scrollbar::-webkit-scrollbar-track {
		background-color: transparent;
	}

	@supports (scrollbar-width: auto) {
		.scrollbar {
			scrollbar-color: var(--color-base-400) transparent;
			scrollbar-width: thin;
		}

		:global(.dark .scrollbar) {
			scrollbar-color: var(--color-base-800) transparent;
		}
	}

	@supports not (scrollbar-width: auto) {
		:global(.scrollbar::-webkit-scrollbar) {
			width: 14px;
			height: 14px;
		}
	}

	.scrollbar::-webkit-scrollbar-thumb {
		background-color: var(--color-base-400);
		border-radius: 20px;
		border: 4px solid transparent;
		background-clip: content-box;
	}

	.scrollbar::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-base-500);
	}

	/* Dark mode rules */
	:global(.dark .scrollbar::-webkit-scrollbar-thumb) {
		background-color: var(--color-base-800);
	}

	:global(.dark .scrollbar::-webkit-scrollbar-thumb:hover) {
		background-color: var(--color-base-700);
	}
</style>
