## Usage

Animated handwriting text powered by [tegaki](https://github.com/KurtGokhan/tegaki). Text draws itself stroke by stroke.

```svelte
<AnimatedText text="Hello world" font="caveat" style="font-size: 64px" />
```

### Built-in fonts

Four handwriting fonts are bundled: `caveat`, `italianno`, `tangerine`, `parisienne`.

```svelte
<AnimatedText text="Elegant script" font="parisienne" speed={1.5} />
```

### Controlled progress

Drive the animation yourself by binding progress (0 → 1):

```svelte
<AnimatedText text="Scrub me" mode="controlled" progress={0.5} />
```
