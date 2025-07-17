<script>
	import Example from './Example.svelte';
</script>

# Button

A versatile button component with multiple variants and sizes.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Button } from '@fuxui/base';
</script>

<!-- Basic button -->
<Button>Click me</Button>

<!-- With variants -->
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

<!-- With sizes -->
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

<!-- As link -->
<Button href="/path">Link Button</Button>

<!-- Icon button -->
<Button variant="primary" size="icon">
	<svg>...</svg>
</Button>
```

## API Reference

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'link' \| 'ghost' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'violet' \| 'purple' \| 'fuchsia' \| 'pink' \| 'rose' \| 'orange' \| 'amber' \| 'lime' \| 'emerald' \| 'teal' \| 'cyan' \| 'sky'` | `'primary'` | The visual style variant of the button. |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon' \| 'iconSm' \| 'iconLg'` | `'default'` | The size of the button. |
| `href` | `string` | `undefined` | If provided, renders the button as an anchor tag with this href. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The button type (only applies when not using href). |
| `disabled` | `boolean` | `false` | Whether the button is disabled. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the button. |
| `children` | `Snippet` | `undefined` | The content to render inside the button. |

## Accessibility

- Supports keyboard navigation
- Proper focus management with visible focus indicators
- Screen reader compatible
- Follows WAI-ARIA button patterns
