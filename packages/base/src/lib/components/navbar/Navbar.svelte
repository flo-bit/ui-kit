<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../utils';

	const {
		class: className,
		children,
		hasSidebar = false,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { hasSidebar?: boolean } = $props();
</script>

<div
	class={cn(
		'header fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between p-2',
		hasSidebar ? 'lg:left-72 xl:left-80' : '',
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<div
		class="backdrop from-base-50/90 via-base-50/0 dark:from-base-950/90 dark:via-base-950/0 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b backdrop-blur-md"
	></div>

	<div
		class="backdrop-edge bg-base-900/10 dark:bg-base-500/10 pointer-events-none absolute right-0 bottom-0 left-0 -z-10 translate-y-full backdrop-blur-sm"
	></div>
</div>

<style>
	/** better frosted glass effect adopted from https://www.joshwcomeau.com/css/backdrop-filter/ */
	.header {
		--thickness: 1px;
	}

	@supports (mask-image: none) or (-webkit-mask-image: none) {
		.backdrop {
			height: 200%;
			-webkit-mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
			mask-image: linear-gradient(to bottom, black 0% 50%, transparent 50% 100%);
		}
		.backdrop-edge {
			height: 100%;
			inset: 0;
			-webkit-mask-image: linear-gradient(
				to bottom,
				black 0,
				black var(--thickness),
				transparent var(--thickness)
			);
			mask-image: linear-gradient(
				to bottom,
				black 0,
				black var(--thickness),
				transparent var(--thickness)
			);

			filter: brightness(1.5);
		}
	}
</style>
