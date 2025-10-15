<script>
	import Example from './Example.svelte';
</script>

# Theme Toggle

## Example

<Example />

## Usage

```svelte
<script>
	import { ThemeToggle } from '@foxui/core';
</script>

<ThemeToggle />
```

If this component is used anywhere on your site, the mode will default to system settings (if the user has not manually set the mode).

## Accessibility

- If javascript is disabled, the theme toggle will not be shown.

## Credits

Based on [mode-watcher](https://github.com/svecosystem/mode-watcher), also exports all functions and stores from the package.