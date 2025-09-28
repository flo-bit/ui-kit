<script>
	import Example from './Example.svelte';
</script>

# Modal

A dialog component for displaying content in an overlay with backdrop and focus management.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Modal, Button } from '@fuxui/base';

	let open = $state(false);
	let confirmOpen = $state(false);
</script>

<!-- Basic modal -->
<Modal bind:open title="Basic Modal">
	<p>This is a basic modal with just content.</p>
</Modal>

<!-- Modal with action buttons -->
<Modal
	bind:open={confirmOpen}
	title="Confirm Action"
	description="Are you sure you want to proceed?"
	yesButton={{ 
		label: "Confirm", 
		onclick: () => console.log('confirmed'),
		variant: "primary"
	}}
	noButton={{ 
		label: "Cancel", 
		onclick: () => console.log('cancelled'),
		variant: "secondary"
	}}
/>

<!-- Modal with custom content -->
<Modal bind:open title="Custom Modal" closeButton={false}>
	<div class="space-y-4">
		<p>Custom content goes here.</p>
		<Button onclick={() => open = false}>Close</Button>
	</div>
</Modal>

<!-- Modal with snippets -->
<Modal bind:open>
	{#snippet titleSnippet()}
		<h2 class="text-xl font-bold">Custom Title</h2>
	{/snippet}
	{#snippet descriptionSnippet()}
		<p class="text-gray-600">Custom description content.</p>
	{/snippet}
	<p>Modal content here.</p>
</Modal>

<Button onclick={() => (open = true)}>Open Modal</Button>
```

## API Reference

### Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Whether the modal is open. Use `bind:open` for two-way binding. |
| `title` | `string` | `undefined` | The title text of the modal. |
| `titleSnippet` | `Snippet` | `undefined` | Custom snippet for the modal title. |
| `titleClass` | `string` | `undefined` | CSS classes for the title element. |
| `description` | `string` | `undefined` | The description text of the modal. |
| `descriptionSnippet` | `Snippet` | `undefined` | Custom snippet for the modal description. |
| `descriptionClass` | `string` | `undefined` | CSS classes for the description element. |
| `interactOutsideBehavior` | `'close' \| 'ignore'` | `'close'` | Behavior when clicking outside the modal. |
| `closeButton` | `boolean` | `true` | Whether to show the close button in the top-right corner. |
| `yesButton` | `boolean \| object` | `undefined` | Configuration for the yes/confirm button. |
| `noButton` | `boolean \| object` | `undefined` | Configuration for the no/cancel button. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the modal content. |
| `onOpenAutoFocus` | `(event: Event) => void` | `undefined` | Callback when the modal receives focus on open. |
| `children` | `Snippet` | `undefined` | The main content of the modal. |

### Button Configuration Object

For `yesButton` and `noButton`, you can pass an object with:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `'Yes'` / `'No'` | The button text. |
| `onclick` | `() => void` | `undefined` | Click handler for the button. |
| `variant` | `ButtonVariant` | `'primary'` / `'secondary'` | The button variant. |
| `disabled` | `boolean` | `false` | Whether the button is disabled. |
| `class` | `string` | `undefined` | Additional CSS classes for the button. |

## Accessibility

- Proper focus management with focus trap
- Keyboard navigation support (Escape to close)
- ARIA attributes for screen readers
- Backdrop click handling
- Focus restoration when closed
