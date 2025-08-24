<script lang="ts">
	import SliderExample from './Example.svelte';
	import SliderVerticalExample from './VerticalExample.svelte';
</script>

# Slider

A slider component for selecting values from a range.

## Examples

### Horizontal Slider

<SliderExample />

### Vertical Slider

<SliderVerticalExample />

## Usage

```svelte
<script>
	import { Slider, SliderNumber } from '@fuxui/base';

	let value = $state(50);
	let verticalValue = $state(30);
</script>

<!-- Horizontal Slider -->
<Slider bind:value min={0} max={100} />

<!-- Vertical Slider -->
<Slider bind:value={verticalValue} orientation="vertical" min={0} max={100} />

<!-- With Number Display -->
<SliderNumber bind:value />
```

## API Reference

### Slider Props

| Prop          | Type                         | Default        | Description                                                               |
|---------------|------------------------------|----------------|---------------------------------------------------------------------------|
| `value`       | `number \| number[]`         | `undefined`    | The current value(s) of the slider. Use `bind:value` for two-way binding. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the slider.                                            |
| `type`        | `'single' \| 'range'`        | `'single'`     | Whether to allow a single value or a range of values.                     |
| `min`         | `number`                     | `0`            | The minimum value of the slider.                                          |
| `max`         | `number`                     | `100`          | The maximum value of the slider.                                          |
| `step`        | `number`                     | `1`            | The step increment for the slider values.                                 |
| `disabled`    | `boolean`                    | `false`        | Whether the slider is disabled.                                           |
| `class`       | `string`                     | `undefined`    | Additional CSS classes to apply to the slider.                            |
| `tabindex`    | `number`                     | `undefined`    | The tab index for keyboard navigation.                                    |

### SliderNumber Props

SliderNumber accepts all the same props as Slider, with the addition of displaying the current value numerically.

## Accessibility

- Supports keyboard navigation with arrow keys
- Follows WAI-ARIA slider pattern
- Proper focus management and screen reader support