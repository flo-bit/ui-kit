<script>
	import Example from './Example.svelte';
</script>

# Alert

A flexible alert component for displaying important messages with different severity levels.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Alert } from '@fuxui/base';
</script>

<!-- Basic alert -->
<Alert title="Information" type="info">
	This is an informational message.
</Alert>

<!-- Different alert types -->
<Alert title="Success" type="success">
	Operation completed successfully!
</Alert>

<Alert title="Warning" type="warning">
	Please review your input.
</Alert>

<Alert title="Error" type="error">
	Something went wrong.
</Alert>

<!-- Alert without title -->
<Alert type="info">
	Simple alert message without a title.
</Alert>

<!-- Alert with custom styling -->
<Alert title="Custom Alert" type="info" class="my-custom-class">
	Alert with additional styling.
</Alert>
```

## API Reference

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | The title/heading of the alert. |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | The type/severity level of the alert, which determines the styling. |
| `children` | `Snippet` | `undefined` | The content to display in the alert body. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the alert. |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed by the user. |
| `onDismiss` | `() => void` | `undefined` | Callback function called when the alert is dismissed. |

## Accessibility

- Proper ARIA roles and attributes for screen readers
- Color is not the only way to convey meaning (icons and text are used)
- Keyboard navigation support for dismissible alerts
- High contrast support for all alert types
