<script lang="ts">
	let { children } = $props();

	// this is fucking hacky, todo fix that
</script>

<div
	class="prose prose-base prose-a:no-underline prose-a:text-accent-600 dark:prose-a:text-accent-500 dark:hidden"
>
	{@render children?.()}
</div>
<div
	class="prose prose-base-dark dark:prose-invert prose-a:no-underline prose-a:text-accent-600 dark:prose-a:text-accent-500"
>
	{@render children?.()}
</div>

<style>
	.prose-base {
		--tw-prose-body: var(--color-accent-700);
		--tw-prose-headings: var(--color-base-900);
		--tw-prose-lead: var(--color-base-600);
		--tw-prose-links: var(--color-base-900);
		--tw-prose-bold: var(--color-base-900);
		--tw-prose-counters: var(--color-base-500);
		--tw-prose-bullets: var(--color-base-300);
		--tw-prose-hr: var(--color-base-200);
		--tw-prose-quotes: var(--color-base-900);
		--tw-prose-quote-borders: var(--color-base-200);
		--tw-prose-captions: var(--color-base-500);
		--tw-prose-kbd: var(--color-base-900);
		--tw-prose-kbd-shadows: var(--color-base-900);
		--tw-prose-code: var(--color-base-900);
		--tw-prose-pre-code: var(--color-base-200);
		--tw-prose-pre-bg: var(--color-base-800);
		--tw-prose-th-borders: var(--color-base-300);
		--tw-prose-td-borders: var(--color-base-200);
	}

	.prose-base-dark {
		--tw-prose-invert-body: var(--color-base-300);
		--tw-prose-invert-headings: var(--color-white);
		--tw-prose-invert-lead: var(--color-base-400);
		--tw-prose-invert-links: var(--color-white);
		--tw-prose-invert-bold: var(--color-white);
		--tw-prose-invert-counters: var(--color-base-400);
		--tw-prose-invert-bullets: var(--color-base-600);
		--tw-prose-invert-hr: var(--color-base-700);
		--tw-prose-invert-quotes: var(--color-base-100);
		--tw-prose-invert-quote-borders: var(--color-base-700);
		--tw-prose-invert-captions: var(--color-base-400);
		--tw-prose-invert-kbd: var(--color-white);
		--tw-prose-invert-kbd-shadows: var(--color-white);
		--tw-prose-invert-code: var(--color-white);
		--tw-prose-invert-pre-code: var(--color-base-300);
		--tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
		--tw-prose-invert-th-borders: var(--color-base-600);
		--tw-prose-invert-td-borders: var(--color-base-700);
	}
</style>
