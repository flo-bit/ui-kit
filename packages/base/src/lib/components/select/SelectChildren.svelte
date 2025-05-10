<script lang="ts">
	import { Select, type WithoutChildren } from "bits-ui";

	type Props = Select.RootProps & {
		placeholder?: string;
		contentProps?: WithoutChildren<Select.ContentProps>;
	};

	let {
		value = $bindable(),
		placeholder,
		contentProps,
		children,
		...props
	}: Props = $props();
</script>
 
<Select.Root bind:value={value as never} {...props}>
	<Select.Trigger>
		{value}
	</Select.Trigger>
	<Select.Portal>
		<Select.Content {...contentProps}>
			<Select.Viewport>
				{children?.()}
			</Select.Viewport>
		</Select.Content>
	</Select.Portal>
</Select.Root>