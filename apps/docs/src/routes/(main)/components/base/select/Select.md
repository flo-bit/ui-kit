<script lang="ts">
	import SelectExample from './Example.svelte';
</script>

# Select

A dropdown selection component for choosing from a list of options.

## Examples

<SelectExample />

## Usage

```svelte
<script lang="ts">
	import { Select } from '@fuxui/base';

	let selected = $state('Apple');
	let multiSelected = $state(['Apple']);
</script>

<!-- Basic select -->
<Select
	bind:value={selected}
	type="single"
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange' },
		{ value: 'Banana', label: 'Banana' }
	]}
/>

<!-- Select with placeholder -->
<Select
	bind:value={selected}
	type="single"
	placeholder="Choose a fruit..."
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange' },
		{ value: 'Banana', label: 'Banana' }
	]}
/>

<!-- Select with disabled options -->
<Select
	bind:value={selected}
	type="single"
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange', disabled: true },
		{ value: 'Banana', label: 'Banana' }
	]}
/>

<!-- Multiple selection -->
<Select
	bind:value={multiSelected}
	type="multiple"
	placeholder="Select fruits..."
	items={[
		{ value: 'Apple', label: 'Apple' },
		{ value: 'Orange', label: 'Orange' },
		{ value: 'Banana', label: 'Banana' },
		{ value: 'Grape', label: 'Grape' }
	]}
/>
```

## API Reference

### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| string[]` | `undefined` | The selected value(s). Use `bind:value` for two-way binding. |
| `type` | `'single' \| 'multiple'` | `'single'` | Whether to allow single or multiple selections. |
| `items` | `Array<{value: string, label: string, disabled?: boolean}>` | `[]` | The list of selectable options. |
| `placeholder` | `string` | `undefined` | Placeholder text when no option is selected. |
| `disabled` | `boolean` | `false` | Whether the select is disabled. |
| `required` | `boolean` | `false` | Whether the select is required. |
| `name` | `string` | `undefined` | The name attribute for form submission. |
| `contentProps` | `object` | `undefined` | Additional props to pass to the dropdown content. |

### Item Object

Each item in the `items` array should have:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | `string` | Yes | The value of the option. |
| `label` | `string` | Yes | The display text for the option. |
| `disabled` | `boolean` | No | Whether the option is disabled. |

## Accessibility

- Keyboard navigation with arrow keys
- Proper ARIA attributes for screen readers
- Focus management and visual indicators
- Support for disabled options
- Screen reader announcements for selection changes
