<script>
	const options = [
		{ label: 'Default', checked: false },
		{ label: 'Comfortable', checked: true },
		{ label: 'Compact', checked: false }
	];
</script>

<div class="flex w-full flex-col gap-2">
	{#each options as option (option.label)}
		<div class="flex items-center gap-2">
			<div
				class="border-accent-500/40 bg-accent-100/60 dark:border-accent-500/20 dark:bg-accent-950/20 data-[state=checked]:border-accent-500/60 data-[state=checked]:bg-accent-200/60 dark:data-[state=checked]:border-accent-500/30 dark:data-[state=checked]:bg-accent-900/40 flex size-5 items-center justify-center rounded-full border"
				data-state={option.checked ? 'checked' : 'unchecked'}
			>
				{#if option.checked}
					<div class="bg-accent-600 dark:bg-accent-400 size-2 rounded-full"></div>
				{/if}
			</div>
			<span class="text-base-900 dark:text-base-50 text-sm font-medium">{option.label}</span>
		</div>
	{/each}
</div>
