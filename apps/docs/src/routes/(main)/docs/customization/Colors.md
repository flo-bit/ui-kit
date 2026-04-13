# Customization

foxui is designed to be opinionated by default but easy to customize. Colors, border radius, and fonts can all be changed with CSS variables — no build step required.

## Colors

foxui uses two color scales: **base** (neutrals) and **accent** (brand color). The default is pink accent on stone base.

### Switching colors

Add a color class to any element to retheme it and all its children:

```svelte
<!-- Change accent color -->
<div class="blue">
  <Button>Now blue</Button>
  <Badge>Also blue</Badge>
</div>

<!-- Change base color -->
<div class="zinc">
  <Button variant="secondary">Zinc neutral</Button>
</div>
```

**Available accent colors:** red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

**Available base colors:** gray, zinc, neutral, stone, slate, taupe, mist, olive, mauve

### Theme Picker

Try it out — pick an accent and base color:


