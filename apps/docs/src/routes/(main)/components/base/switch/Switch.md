<script>
	import Example from './Example.svelte';
</script>

# Switch

A toggle switch component for binary on/off states with smooth animations.

## Examples

<Example />

## Usage

```svelte
<script>
	import { Switch } from '@fuxui/base';

	let checked = $state(false);
	let disabled = $state(false);
</script>

<!-- Basic switch -->
<Switch bind:checked />

<!-- Disabled switch -->
<Switch bind:checked disabled />

<!-- With initial state -->
<Switch checked={true} />

<!-- Controlled switch -->
<Switch 
	checked={someCondition} 
	onCheckedChange={(newValue) => {
		// Handle change
		someCondition = newValue;
	}} 
/>
```

## API Reference

### Switch Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the switch is checked/on. Use `bind:checked` for two-way binding. |
| `disabled` | `boolean` | `false` | Whether the switch is disabled. |
| `required` | `boolean` | `false` | Whether the switch is required. |
| `name` | `string` | `undefined` | The name attribute for form submission. |
| `value` | `string` | `undefined` | The value attribute for form submission. |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback fired when the checked state changes. |
| `class` | `string` | `undefined` | Additional CSS classes to apply to the switch. |

## Accessibility

- Supports keyboard navigation with Space and Enter keys
- Proper focus management with visible focus indicators
- Screen reader compatible with proper ARIA attributes
- Follows WAI-ARIA switch pattern
- Announces state changes to assistive technologies
