<script lang="ts">
	import { cn } from '$lib';
	import { Portal } from 'bits-ui';
	import { onMount, type Snippet } from 'svelte';

	let {
		class: className,
		children,
		container,
		title,
		titleClasses,
		hideCursor = true
	}: {
		class?: string;
		children?: Snippet;
		container?: HTMLElement | string;
		title?: string;
		titleClasses?: string;
		hideCursor?: boolean;
	} = $props();

	let x = $state(-1000);
	let y = $state(-1000);
	let isInside: boolean = $state(false);

	onMount(() => {
		if (typeof container === 'string') {
			let containerElement = document.querySelector(container);

			if (containerElement) {
				container = containerElement as HTMLElement;
			} else {
				console.error(`Container ${container} not found, using body`);
			}
		}

		if (!container) {
			container = document.body;
		}

		if (container instanceof HTMLElement) {
			container.addEventListener('mousemove', handleMouseMove);
			container.addEventListener('mouseleave', handleMouseLeave);
			container.addEventListener('mouseenter', handleMouseEnter);
			window.addEventListener('resize', handleResize);
			rect = container.getBoundingClientRect();

			if (hideCursor) {
				// important:
				// container.style.cursor = 'none !important;';
			}
		}
	});

	let rect: DOMRect | null = null;

	const handleResize = () => {
		if (container instanceof HTMLElement) {
			rect = container.getBoundingClientRect();
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		const scrollX = window.scrollX;
		const scrollY = window.scrollY;

		x = e.clientX - (rect?.left ?? 0) + scrollX;
		y = e.clientY - (rect?.top ?? 0) + scrollY;
	};
	const handleMouseLeave = () => {
		console.log('mouse leave');
		isInside = false;
	};

	const handleMouseEnter = () => {
		console.log('mouse enter');
		isInside = true;
	};
</script>

<Portal to={container}>
	{#if isInside}
		<div
			class={cn('animate-in fade-in-0 pointer-events-none absolute z-50', className)}
			style={`top: ${y}px; left: ${x}px`}
		>
			{#if title}
				<div
					class={cn(
						'bg-accent-500/10 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20 dark:border-accent-500/10 m-3 w-fit rounded-2xl border px-2 py-1 text-sm backdrop-blur-sm',
						titleClasses
					)}
				>
					{title}
				</div>
			{/if}

			{@render children?.()}
		</div>
	{/if}
</Portal>
