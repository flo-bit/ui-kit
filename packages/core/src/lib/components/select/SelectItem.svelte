<script lang="ts">
	import { cn } from '../../utils';
	import { Select } from 'bits-ui';

	let { value = $bindable(), label, children: myChildren, ...props }: Select.ItemProps = $props();

	console.log(value);
</script>

<Select.Item {value} {label} {...props}>
	{#snippet children(props)}
		{#if props.selected}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
			</svg>
		{/if}

		{#if myChildren}
			{@render myChildren?.(props)}
		{:else}
			{label}
		{/if}
	{/snippet}
</Select.Item>
