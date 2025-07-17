<script>
	import Example from './Example.svelte';
</script>

# Checkbox

A checkbox component for binary choices with support for indeterminate state.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Checkbox } from '@fuxui/base';

	let checked = $state(false);
	let indeterminate = $state(false);
	let disabled = $state(false);
</script>

<!-- Basic checkbox -->
<Checkbox bind:checked />

<!-- With variants -->
<Checkbox variant="primary" bind:checked />
<Checkbox variant="secondary" bind:checked />

<!-- With sizes -->
<Checkbox sizeVariant="sm" bind:checked />
<Checkbox sizeVariant="default" bind:checked />
<Checkbox sizeVariant="lg" bind:checked />

<!-- Indeterminate state -->
<Checkbox bind:checked bind:indeterminate />

<!-- Disabled checkbox -->
<Checkbox bind:checked disabled />
```

## API Reference

### Checkbox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the checkbox is checked. Use `bind:checked` for two-way binding. |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in an indeterminate state. Use `bind:indeterminate` for two-way binding. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | The visual style variant of the checkbox. |
| `sizeVariant` | `'default' \| 'sm' \| 'lg'` | `'default'` | The size of the checkbox. |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled. |
| `required` | `boolean` | `false` | Whether the checkbox is required. |
| `name` | `string` | `undefined` | The name attribute for form submission. |
| `value` | `string` | `undefined` | The value attribute for form submission. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the checkbox. |

## Accessibility

- Supports keyboard navigation with Space key
- Proper focus management with visible focus indicators
- Screen reader compatible with proper ARIA attributes
- Follows WAI-ARIA checkbox pattern
- Supports indeterminate state for screen readers
