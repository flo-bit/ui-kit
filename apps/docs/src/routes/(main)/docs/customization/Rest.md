### Custom colors

Override the CSS variables directly for full control:

```css
:root {
  --accent-500: oklch(0.65 0.2 250);
  /* set all shades 50-950 for best results */
}
```

## Border Radius

All components use three radius tokens that you can override:

- `--ui-radius` — `1rem` (16px) — Buttons, inputs, cards, boxes
- `--ui-radius-lg` — `1.25rem` (20px) — Modals, sidebars, large containers
- `--ui-radius-sm` — `0.75rem` (12px) — Inner elements, menu items, small controls

### Changing globally

```css
:root {
  --ui-radius: 0.5rem;
  --ui-radius-lg: 0.75rem;
  --ui-radius-sm: 0.25rem;
}
```

### Using presets

Add a class to any ancestor element:

```svelte
<!-- Sharp corners -->
<div class="sharp">
  <Button>Sharp</Button>
</div>

<!-- Fully rounded (pill) -->
<div class="pill">
  <Button>Pill</Button>
</div>
```

### Scoped overrides

Like colors, radius can be scoped to any subtree:

```svelte
<Button>Default radius</Button>

<div class="sharp">
  <Button>Sharp radius</Button>
  <Badge>Also sharp</Badge>
</div>
```

## Fonts

foxui ships with [Geist](https://vercel.com/font) as the default font. You can change fonts two ways: apply a preset class, or define your own.

### Using presets

Add a class to any ancestor element to scope the font — same pattern as colors and radius:

```svelte
<!-- Default (Geist) -->
<Button>Geist</Button>

<!-- Use system fonts -->
<div class="system-font">
  <Button>System font</Button>
</div>

<!-- Use a serif -->
<div class="serif-font">
  <Button>Serif</Button>
</div>

<!-- Use a monospace font everywhere -->
<div class="mono-font">
  <Button>Mono</Button>
</div>
```

**Built-in presets:** `geist` (default), `system-font`, `serif-font`, `mono-font`

### Defining your own font class

Create a class that sets the font variables — works anywhere in the DOM tree:

```css
@import '@fontsource-variable/inter';

.inter {
  --ui-font-sans: 'Inter Variable', sans-serif;
}
```

Then use it like any other class:

```svelte
<div class="inter">
  <Button>Inter font</Button>
  <Badge>Also Inter</Badge>
</div>
```

### Changing globally

To change the default font for your entire app, override the variables on `:root` or add the class to `<html>`:

```css
/* via CSS variable */
:root {
  --ui-font-sans: 'My Custom Font', sans-serif;
}
```

```html
<!-- via class -->
<html class="system-font">
```

### The variables

- `--ui-font-sans` — Body text, UI elements (default: Geist)
- `--ui-font-mono` — Code blocks, monospace text (default: Geist Mono)

## Combining customizations

All customization layers compose together:

```svelte
<!-- Blue accent, sharp corners, custom font -->
<div class="blue sharp">
  <Button>Fully customized</Button>
</div>
```

```css
:root {
  --ui-font-sans: 'My Custom Font', sans-serif;
  --ui-radius: 0.5rem;
  --ui-radius-lg: 0.75rem;
  --ui-radius-sm: 0.25rem;
}
```
