# Icons

foxui re-exports two icon libraries so your icons match the components out of the box.

- **Static icons** — [Lucide](https://lucide.dev) (~1500 icons). The de-facto Svelte icon set. Clean, consistent, friendly.
- **Animated icons** — [Moving Icons](https://www.movingicons.dev) (~500 icons). Hand-crafted animated versions of popular Lucide icons, built natively for Svelte 5.

Both use the same API (size, color, strokeWidth, class). Moving Icons additionally accept an `animate` prop to trigger motion.

## Static icons

Import any [Lucide icon](https://lucide.dev/icons) in PascalCase:

```svelte
<script>
  import { ArrowRight, Check, User } from '@foxui/core/icons';
</script>

<ArrowRight size={20} />
<Check size={16} strokeWidth={2.5} />
<User class="text-accent-500" />
```

Browse the full icon set at [lucide.dev/icons](https://lucide.dev/icons).

## Animated icons

Import any [Moving Icon](https://www.movingicons.dev/icons) with the same name as its Lucide counterpart:

```svelte
<script>
  import { Bell } from '@foxui/core/moving-icons';

  let animate = $state(false);
</script>

<button
  onmouseenter={() => (animate = true)}
  onmouseleave={() => (animate = false)}
>
  <Bell size={20} {animate} />
</button>
```

Set `animate={true}` to play the motion once (useful for mount / state change) or bind it to hover/focus state for interactive animations.

Browse the animated set at [movingicons.dev/icons](https://www.movingicons.dev/icons).

## Props

Both libraries share the same core props:

- `size` — Icon size in pixels (default: `24`)
- `color` — Stroke color, any CSS color (default: `'currentColor'`)
- `strokeWidth` — SVG stroke width (default: `2`)
- `class` — Tailwind or custom classes

Moving icons add one more:

- `animate` — Boolean. When `true`, plays the icon's animation.

## Using with @foxui/all

If you use the metapackage, the same subpaths work:

```svelte
<script>
  import { Check } from '@foxui/all/icons';
  import { Copy } from '@foxui/all/moving-icons';
</script>
```

## Picking the right one

- Use **static** icons for most cases — in-page UI, content, buttons without interaction feedback
- Use **animated** icons for moments that deserve motion — copy success, notification bells, menu toggles, hover feedback on important actions

Both libraries are fully tree-shaken, so only the icons you actually import end up in your bundle.
