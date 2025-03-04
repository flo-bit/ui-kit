<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Color = { class?: string; label: string; value?: string };

	let {
		ref = $bindable(null),

		class: className,
		colorsClass,
		colors = $bindable([]),
		selected = $bindable(colors[0]),

		onselected,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		colors: Color[];

		selected?: Color;

		colorsClass?: string;

		onselected?: (color: Color, previous: Color) => void;
	} = $props();
</script>

<div
	class={cn('group flex flex-wrap items-center gap-2.5', className)}
	{...restProps}
	bind:this={ref}
>
	{#each colors as color}
		<button
			class={cn(
				'peer outline-base-900 focus:outline-base-900 dark:outline-base-100 dark:focus:outline-base-100 cursor-pointer items-center justify-center rounded-full p-0.5 outline-offset-2 transition-all duration-100 focus:outline-2 focus:outline-offset-2',
				'border-base-600 border-opacity-30 dark:border-base-400 dark:border-opacity-30 size-8 rounded-full border transition-all',
				selected.label === color.label
					? 'bg-opacity-100 group-focus-within:outline-base-500 focus:group-focus-within:outline-base-900 dark:group-focus-within:outline-base-400 dark:focus:group-focus-within:outline-base-100 outline-2'
					: 'opacity-90 outline-0 hover:opacity-100 focus:opacity-100',
				colorsClass,
				color.class
			)}
			style={color.value ? `background-color: ${color.value}` : undefined}
			onclick={() => {
				if (selected === color) return;
				let previous = selected;
				selected = color;

				if (onselected) onselected(color, previous);
			}}
		>
			<span class="sr-only">{color.label}</span>
		</button>
	{/each}
</div>
