This lists every docs page (Quick Start, Philosophy, Customization, Haptics) plus every component across all categories, with direct links to each page's full documentation.

## Per-component documentation

Each component has its own `llms.txt` endpoint with:

- A description of what the component does
- The full API reference (props, types, defaults)
- A working code example
- Links to the underlying `bits-ui` primitives when applicable

Access any component's docs by appending `/llms.txt` to its URL:

```
https://flo-bit.dev/ui-kit/components/core/button/llms.txt
https://flo-bit.dev/ui-kit/components/social/post/llms.txt
```

You can also grab the URL from the "llms.txt" button at the top of any component page.

## Using with Claude

Paste the URL into your conversation and ask Claude to fetch it. For example:

> Use the Button component from foxui (docs: https://flo-bit.dev/ui-kit/components/core/button/llms.txt) to build a sign-in form.

Claude will fetch the docs and have the full API signature to work with.

## Using with Cursor

Add foxui to your Cursor docs:

1. Open Cursor settings → Features → Docs
2. Add a new doc with URL: `https://flo-bit.dev/ui-kit/docs/llms.txt`
3. Reference it in your prompts with `@foxui`

## Using with other tools

Any tool that can fetch URLs or ingest plain text can consume these endpoints. The format is deliberately simple — plain text, no authentication, CORS-friendly.
