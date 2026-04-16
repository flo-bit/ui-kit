<script lang="ts" module>
	import { RadioGroup as RadioGroupPrimitive, type WithoutChild } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn } from '../../utils';
	import RadioGroupItem, {
		type RadioGroupItemVariant,
		type RadioGroupItemSize
	} from './radio-group-item.svelte';
	import { Label } from '../label';

	export type RadioGroupOption = {
		value: string;
		label?: string;
		description?: string;
		disabled?: boolean;
	};

	export type RadioGroupProps = WithoutChild<RadioGroupPrimitive.RootProps> & {
		options?: RadioGroupOption[];
		variant?: RadioGroupItemVariant;
		sizeVariant?: RadioGroupItemSize;
		orientation?: 'vertical' | 'horizontal';
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		value = $bindable(''),
		options,
		variant = 'primary',
		sizeVariant = 'default',
		orientation = 'vertical',
		class: className,
		children,
		...restProps
	}: RadioGroupProps = $props();

	let uid = $props.id();
</script>

<RadioGroupPrimitive.Root
	bind:ref
	bind:value
	class={cn(
		'flex gap-3',
		orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
		className
	)}
	{...restProps}
>
	{#if options}
		{#each options as option (option.value)}
			{@const id = `${uid}-${option.value}`}
			<div class={cn('flex gap-3', option.description ? 'items-start' : 'items-center')}>
				<RadioGroupItem
					{id}
					value={option.value}
					disabled={option.disabled}
					{variant}
					{sizeVariant}
					class={option.description ? 'mt-0.5' : ''}
				/>
				{#if option.label || option.description}
					<div
						class={cn(
							'flex flex-col gap-0.5',
							option.disabled && 'pointer-events-none opacity-40'
						)}
					>
						{#if option.label}
							<Label for={id} class="cursor-pointer leading-none">{option.label}</Label>
						{/if}
						{#if option.description}
							<span class="text-base-600 dark:text-base-400 text-xs leading-snug">
								{option.description}
							</span>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	{:else}
		{@render children?.()}
	{/if}
</RadioGroupPrimitive.Root>
