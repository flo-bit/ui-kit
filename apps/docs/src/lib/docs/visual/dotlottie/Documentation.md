## Usage

Renders a Lottie animation using the [dotLottie web runtime](https://github.com/LottieFiles/dotlottie-web) (WASM + canvas). Unlike `<Lottie>`, this supports the **Slots API** — a first-class runtime theming system.

Accepts both `.lottie` and plain `.json` animations:

```svelte
<DotLottie src="/my-anim.lottie" class="aspect-video max-w-xl" />
```

### Theming with slots

The animation JSON must have properties tagged with `sid` values per the [Lottie Slots spec](https://lottie.github.io/lottie-spec/latest/specs/helpers/#slots). Then pass a `slots` prop mapping slot id → CSS color:

```svelte
<DotLottie
	src="/my-anim.lottie"
	slots={{
		Background: 'var(--color-base-100)',
		Primary: 'var(--color-accent-500)'
	}}
/>
```

Slots re-apply automatically when the theme changes or when the `slots` prop updates.

### `<Lottie>` vs `<DotLottie>`

**`<Lottie>`**
- Runtime: `lottie-web` (SVG)
- Theming: `colorMap` — replaces matching source colors anywhere in the file
- Works on any existing animation
- Lighter bundle

**`<DotLottie>`**
- Runtime: `@lottiefiles/dotlottie-web` (WASM + canvas)
- Theming: `slots` — requires the animation to be authored with `sid` markers
- Heavier bundle (WASM renderer)
- Use when you control the animation and want reliable, name-based theming
