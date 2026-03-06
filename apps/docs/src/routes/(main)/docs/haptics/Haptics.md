# Haptics

foxui includes built-in haptic feedback using the [Web Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API) via [web-haptics](https://haptics.lochie.me/). On supported devices (primarily mobile), interactions like button taps will trigger a subtle vibration for tactile feedback.

## Where haptics are used

Haptics are triggered on click for the following components:

- **Button** — all button variants trigger haptics when an `onclick` handler is provided
- **ThemeToggle** — uses Button internally, so haptics are included
- Any custom component that uses **Button** under the hood will also trigger haptics

## Disabling haptics globally

To disable haptics across all foxui components at once, set `hapticsConfig.enabled` to `false`. This is typically done once in your root layout or app entry point:

```svelte
<script>
	import { hapticsConfig } from '@foxui/core';

	hapticsConfig.enabled = false;
</script>
```

This takes effect immediately — any foxui component that would trigger haptics will skip the vibration.

## Disabling haptics per component

You can also disable haptics on individual buttons using the `haptics` prop:

```svelte
<Button onclick={handleClick} haptics={false}>No vibration</Button>
```

This overrides the global setting for that specific button.

## Browser support

Haptic feedback works on both Android and iOS:

- **Android** — uses the [Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
- **iOS Safari** — uses a native switch control fallback to trigger the device's built-in haptic engine

On desktop browsers, haptics are silently ignored.
