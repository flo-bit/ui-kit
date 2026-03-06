## Usage

```svelte
<Tooltip text="Hello there!" withContext>
	{#snippet child({ props })}
		<Button {...props} onclick={handleClick}>Hover me</Button>
	{/snippet}
</Tooltip>
```
