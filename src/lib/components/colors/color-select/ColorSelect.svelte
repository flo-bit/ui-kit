<script lang="ts">
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Color = { class?: string; label: string; value?: string } | string;

	let {
		ref = $bindable(null),

		class: className,
		colorsClass,
		colors = $bindable([]),
		selected = $bindable(colors[0]),

		name = $bindable(crypto.randomUUID()),

		onselected,
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		colors: Color[];

		selected?: Color;

		colorsClass?: string;

		name?: string;

		onselected?: (color: Color, previous: Color) => void;
	} = $props();

	function getLabel(c: Color) {
		if (typeof c === 'string') return c;
		return c.label;
	}

	function getValue(c: Color) {
		if (typeof c === 'string') return c;
		return c.value;
	}

	function getColorClass(c: Color) {
		if (typeof c === 'string') return '';
		return c.class;
	}
</script>

<div
	class={cn('group flex flex-wrap items-center gap-2', className)}
	{...restProps}
	bind:this={ref}
>
	{#each colors as color}
		<label
			aria-label={getLabel(color)}
			class={cn(
				'group relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current',
				'has-focus-visible:outline-base-900 dark:has-focus-visible:outline-base-100 has-focus-visible:outline-2 has-focus-visible:outline-offset-0',
				'has-checked:ring-3',
				colorsClass,
				getColorClass(color)
			)}
			style={getValue(color) ? `color: ${getValue(color)}` : undefined}
		>
			<input
				type="radio"
				{name}
				value={getLabel(color)}
				class="sr-only"
				onchange={() => {
					let previous = selected;
					selected = color;

					if (onselected) onselected(color, previous);
				}}
				checked={getLabel(selected) === getLabel(color)}
			/>

			<span aria-hidden="true" class="size-8 rounded-full bg-current"></span>
		</label>
	{/each}
</div>
