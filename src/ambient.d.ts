// Squelch warnings of image imports from your assets dir
declare module '$docs/assets/*' {
	// eslint-disable-next-line no-var
	var meta;
	export default meta;
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export default class Comp extends SvelteComponent {}

	export const metadata: Record<string, unknown>;
}