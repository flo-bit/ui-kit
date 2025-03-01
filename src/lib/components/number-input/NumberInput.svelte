<script lang="ts">
	import { cn } from '$lib/utils';
	import NumberFlow from '@number-flow/svelte';
	import type { WithElementRef, WithoutChildrenOrChild } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		min = 0,
		value = $bindable(50),
		max = 999,
		defaultValue = 0,
		step = 1,
		class: className,
		ref = $bindable(null),
		inputRef = $bindable(null),
		...restProps
	}: WithElementRef<WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>> & {
		min?: number;
		value?: number;
		max?: number;
		defaultValue?: number;
		class?: string;
		step?: number;
		inputRef?: HTMLInputElement | null;
	} = $props();

	let input: HTMLInputElement;
	let animated = $state(true);
	let showCaret = $state(true);
	function handleInput() {
		if (!inputRef) return;
		animated = false;
		let next = value;
		if (inputRef.value === '') {
			next = defaultValue;
		} else {
			const num = parseInt(inputRef.value);
			if (!isNaN(num) && min <= num && num <= max) next = num;
		}
		inputRef.value = String(next);
		value = next;
	}
	function handlePointerDown(event: PointerEvent, diff: number) {
		animated = true;
		if (event.pointerType === 'mouse') {
			event?.preventDefault();
			inputRef?.focus();
		}
		const newVal = Math.min(Math.max(value + diff, min), max);
		value = newVal;
	}
</script>

<div
	class={cn(
		'bg-accent-500/5 focus-within:ring-accent-400 dark:focus-within:ring-accent-600 text-accent-500 group ring-accent-500/20 dark:ring-accent-500/20 flex w-44 touch-manipulation items-stretch justify-between rounded-2xl text-3xl font-semibold ring transition-[box-shadow] focus-within:ring-2',
		className
	)}
	bind:this={ref}
	{...restProps}
>
	<button
		aria-hidden="true"
		tabindex={-1}
		class="flex cursor-pointer items-center pr-[.325em] pl-[.5em] disabled:cursor-not-allowed disabled:opacity-50 hover:text-accent-600 dark:hover:text-accent-400 disabled:hover:text-accent-500 dark:disabled:hover:text-accent-500 transition-colors"
		disabled={min != null && value <= min}
		onpointerdown={(event) => handlePointerDown(event, -step)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3.5"
			stroke="currentColor"
			class="size-4"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
		</svg>
	</button>
	<div
		class="relative grid items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]"
	>
		<input
			class={cn(
				showCaret ? 'caret-accent-500' : 'caret-transparent',
				'w-full [appearance:textfield] border-0 bg-transparent py-2 text-center font-[inherit] text-3xl font-semibold text-transparent outline-none [-moz-appearance:_textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
			)}
			style="font-kerning: none"
			type="number"
			{min}
			step="1"
			autocomplete="off"
			inputmode="numeric"
			{max}
			{value}
			oninput={handleInput}
			bind:this={inputRef}
		/>
		<NumberFlow
			{value}
			locales="en-US"
			format={{ useGrouping: false }}
			aria-hidden="true"
			{animated}
			on:animationsstart={() => (showCaret = false)}
			on:animationsfinish={() => (showCaret = true)}
			class="pointer-events-none"
			willChange
		/>
	</div>
	<button
		aria-hidden="true"
		tabindex="-1"
		class="flex cursor-pointer items-center pr-[.5em] pl-[.325em] disabled:cursor-not-allowed disabled:opacity-50 hover:text-accent-600 dark:hover:text-accent-400 disabled:hover:text-accent-500 dark:disabled:hover:text-accent-500 transition-colors"
		disabled={max != null && value >= max}
		onpointerdown={(event) => handlePointerDown(event, step)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3.5"
			stroke="currentColor"
			class="size-4"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
</div>
