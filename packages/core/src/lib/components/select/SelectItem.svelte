<script lang="ts">
	import { Select } from 'bits-ui';
	import { Check } from '@jis3r/icons';

	let { value = $bindable(), label, children: myChildren, ...props }: Select.ItemProps = $props();
</script>

<Select.Item {value} {label} {...props}>
	{#snippet children(props)}
		{#if props.selected}
			<Check size={24} strokeWidth={1.5} />
		{/if}

		{#if myChildren}
			{@render myChildren?.(props)}
		{:else}
			{label}
		{/if}
	{/snippet}
</Select.Item>
