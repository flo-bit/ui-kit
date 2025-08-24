<script>
	import Example from './Example.svelte';
</script>

# Textarea

A multi-line text input component for longer text content with resizing capabilities.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Textarea } from '@fuxui/base';

	let value = $state('');
	let comment = $state('');
	let description = $state('');
</script>

<!-- Basic textarea -->
<Textarea bind:value placeholder="Enter your message..." />

<!-- With variants -->
<Textarea variant="primary" bind:value placeholder="Primary textarea" />
<Textarea variant="secondary" bind:value placeholder="Secondary textarea" />

<!-- With sizes -->
<Textarea sizeVariant="sm" bind:value placeholder="Small textarea" />
<Textarea sizeVariant="default" bind:value placeholder="Default textarea" />
<Textarea sizeVariant="lg" bind:value placeholder="Large textarea" />

<!-- With rows -->
<Textarea bind:value rows={5} placeholder="Textarea with 5 rows" />

<!-- Disabled textarea -->
<Textarea bind:value disabled placeholder="Disabled textarea" />

<!-- Required textarea -->
<Textarea bind:value required placeholder="Required field" />

<!-- With resize control -->
<Textarea bind:value resize="vertical" placeholder="Vertical resize only" />
<Textarea bind:value resize="none" placeholder="No resize" />
```

## API Reference

### Textarea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | The current value of the textarea. Use `bind:value` for two-way binding. |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | The visual style variant of the textarea. |
| `sizeVariant` | `'default' \| 'sm' \| 'lg'` | `'default'` | The size of the textarea. |
| `placeholder` | `string` | `undefined` | Placeholder text to display when textarea is empty. |
| `rows` | `number` | `3` | The number of visible text lines. |
| `cols` | `number` | `undefined` | The visible width of the text control. |
| `disabled` | `boolean` | `false` | Whether the textarea is disabled. |
| `readonly` | `boolean` | `false` | Whether the textarea is read-only. |
| `required` | `boolean` | `false` | Whether the textarea is required. |
| `resize` | `'both' \| 'horizontal' \| 'vertical' \| 'none'` | `'both'` | Controls how the textarea can be resized. |
| `maxlength` | `number` | `undefined` | Maximum number of characters allowed. |
| `minlength` | `number` | `undefined` | Minimum number of characters required. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the textarea. |

## Accessibility

- Supports keyboard navigation
- Proper focus management with visible focus indicators
- Screen reader compatible
- Supports ARIA attributes for enhanced accessibility
- Proper labeling and description support
