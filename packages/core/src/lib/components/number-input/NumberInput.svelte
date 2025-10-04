<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '../../utils';

	export const numberInputVariants = tv({
		base: 'group flex w-full max-w-44 touch-manipulation items-stretch justify-between rounded-2xl ring focus-within:ring-2',
		variants: {
			variant: {
				primary:
					'bg-accent-500/5 focus-within:ring-accent-400 dark:focus-within:ring-accent-600 text-accent-500 ring-accent-500/20 dark:ring-accent-500/20',
				secondary: ''
			},
			size: {
				default: 'text-base font-medium max-w-32',
				sm: 'text-sm',
				lg: 'text-3xl font-semibold max-w-44'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	});

	export const numberInputButtonVariants = tv({
		base: 'button-number-input flex cursor-pointer items-center pr-[.5em] pl-[.5em] transition-colors disabled:cursor-not-allowed disabled:opacity-50',
		variants: {
			variant: {
				primary:
					'hover:text-accent-600 dark:hover:text-accent-400 disabled:hover:text-accent-500 dark:disabled:hover:text-accent-500',
				secondary:
					'hover:text-base-600 dark:hover:text-base-400 disabled:hover:text-base-500 dark:disabled:hover:text-base-500'
			}
		}
	});

	export const numberInputInputVariants = tv({
		base: 'number-input w-full [appearance:textfield] border-0 bg-transparent text-center font-[inherit] font-semibold text-transparent outline-none [-moz-appearance:_textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
		variants: {
			variant: {
				primary: '',
				secondary: ''
			},
			size: {
				default: 'p-1',
				sm: '',
				lg: 'p-2'
			}
		}
	});
	export type NumberInputVariant = VariantProps<typeof numberInputVariants>['variant'];
	export type NumberInputSize = VariantProps<typeof numberInputVariants>['size'];

	export type NumberInputProps = WithElementRef<
		WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>
	> & {
		variant?: NumberInputVariant;
		size?: NumberInputSize;
		min?: number;
		value?: number;
		max?: number;
		defaultValue?: number;
		class?: string;
		step?: number;
		inputRef?: HTMLInputElement | null;
	};
</script>

<script lang="ts">
	import NumberFlow from '@number-flow/svelte';
	import type { WithoutChildrenOrChild } from 'bits-ui';
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
		tabindex = undefined,
		variant = 'primary',
		size = 'default',
		...restProps
	}: NumberInputProps = $props();

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

<div class={cn(numberInputVariants({ variant, size }), className)} bind:this={ref} {...restProps}>
	<button
		aria-hidden="true"
		tabindex={-1}
		class={numberInputButtonVariants({ variant })}
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
		class="relative grid w-full items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]"
	>
		<input
			class={cn(
				numberInputInputVariants({ variant, size }),
				showCaret ? 'caret-accent-500' : 'caret-transparent'
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
			{tabindex}
		/>
		<NumberFlow
			{value}
			locales="en-US"
			format={{ useGrouping: false }}
			aria-hidden="true"
			{animated}
			on:animationsstart={() => (showCaret = false)}
			on:animationsfinish={() => (showCaret = true)}
			class="number-flow pointer-events-none"
			willChange
		/>
	</div>
	<button
		aria-hidden="true"
		tabindex="-1"
		class={numberInputButtonVariants({ variant })}
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

<noscript>
	<style>
		.button-number-input {
			display: none;
		}
		.number-input {
			color: var(--color-accent-500);
		}
		.number-flow {
			display: none;
		}
	</style>
</noscript>
