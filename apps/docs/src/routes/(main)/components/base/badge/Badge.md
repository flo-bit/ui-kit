<script>
	import Example from './Example.svelte';
</script>

# Badge

A small status indicator component for labeling and categorizing content.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Badge } from '@fuxui/base';
</script>

<!-- Basic badge -->
<Badge>Default</Badge>

<!-- With variants -->
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="red">Error</Badge>
<Badge variant="green">Success</Badge>
<Badge variant="yellow">Warning</Badge>

<!-- With sizes -->
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

<!-- Color variants -->
<Badge variant="blue">Blue</Badge>
<Badge variant="purple">Purple</Badge>
<Badge variant="pink">Pink</Badge>
<Badge variant="orange">Orange</Badge>

<!-- Special primary variants -->
<Badge variant="primary_shift">Primary Shift</Badge>
<Badge variant="primary_shift_2">Primary Shift 2</Badge>
```

## API Reference

### Badge Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'primary_shift' \| 'primary_shift_2' \| 'secondary' \| 'red' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'violet' \| 'purple' \| 'fuchsia' \| 'pink' \| 'rose' \| 'orange' \| 'amber' \| 'lime' \| 'emerald' \| 'teal' \| 'cyan' \| 'sky'` | `'primary'` | The visual style variant of the badge. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | The size of the badge. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the badge. |
| `children` | `Snippet` | `undefined` | The content to render inside the badge. |

## Accessibility

- Proper semantic markup for screen readers
- High contrast support for all color variants
- Appropriate text sizing for readability
