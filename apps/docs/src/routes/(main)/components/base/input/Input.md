<script>
	import Example from './Example.svelte';
</script>

# Input

A flexible input component for text entry with multiple variants and sizes.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Input } from '@fuxui/base';

	let value = $state('');
	let email = $state('');
	let password = $state('');
</script>

<!-- Basic input -->
<Input bind:value placeholder="Enter text here" />

<!-- With variants -->
<Input variant="primary" bind:value placeholder="Primary input" />
<Input variant="secondary" bind:value placeholder="Secondary input" />

<!-- With sizes -->
<Input sizeVariant="sm" bind:value placeholder="Small input" />
<Input sizeVariant="default" bind:value placeholder="Default input" />
<Input sizeVariant="lg" bind:value placeholder="Large input" />

<!-- Different input types -->
<Input type="email" bind:value={email} placeholder="Email address" />
<Input type="password" bind:value={password} placeholder="Password" />
<Input type="number" bind:value placeholder="Enter number" />

<!-- Disabled input -->
<Input bind:value disabled placeholder="Disabled input" />
```

## API Reference

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | `undefined` | The current value of the input. Use `bind:value` for two-way binding. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | The visual style variant of the input. |
| `sizeVariant` | `'default' \| 'sm' \| 'lg'` | `'default'` | The size of the input. |
| `type` | `string` | `'text'` | The input type (text, email, password, number, etc.). |
| `placeholder` | `string` | `undefined` | Placeholder text to display when input is empty. |
| `disabled` | `boolean` | `false` | Whether the input is disabled. |
| `readonly` | `boolean` | `false` | Whether the input is read-only. |
| `required` | `boolean` | `false` | Whether the input is required. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the input. |

## Accessibility

- Supports keyboard navigation
- Proper focus management with visible focus indicators
- Screen reader compatible
- Supports ARIA attributes for enhanced accessibility
