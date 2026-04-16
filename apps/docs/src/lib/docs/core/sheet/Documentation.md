## Usage

A `Sheet` slides in from any edge of the screen — useful for forms, filters, or navigation that complements the main content.

The API mirrors `Modal`: one component, `bind:open`, plus optional `title`, `description`, and a `footer` snippet for action buttons.

```svelte
<Button onclick={() => (open = true)} variant="secondary">Open</Button>

<Sheet
	bind:open
	side="right"
	title="Edit profile"
	description="Make changes to your profile here."
>
	<!-- main content -->

	{#snippet footer()}
		<Button variant="secondary" onclick={() => (open = false)}>Cancel</Button>
		<Button onclick={() => (open = false)}>Save changes</Button>
	{/snippet}
</Sheet>
```

## Side

Use the `side` prop to pick which edge the sheet slides in from. Values: `top`, `right` (default), `bottom`, `left`.

## Width / height

Override the default size with the `class` prop:

```svelte
<Sheet bind:open class="sm:max-w-lg">
	<!-- wider sheet on larger screens -->
</Sheet>
```
