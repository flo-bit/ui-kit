<script lang="ts">
	import type { ReplyButtonProps } from './types';
	import { numberToHumanReadable } from '..';

	let { count, onclick, href }: ReplyButtonProps = $props();
</script>

{#snippet icon()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="group-hover/post-action:bg-accent-500/10 group-hover/post-action:text-accent-700 dark:group-hover/post-action:text-accent-400 -m-1.5 size-7 rounded-full p-1.5 transition-all duration-100"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
		/>
	</svg>
	{#if count}
		{numberToHumanReadable(count)}
	{/if}
{/snippet}

{#if onclick}
	<button
		class="group/post-action inline-flex cursor-pointer items-center gap-2 text-sm"
		{onclick}
	>
		{@render icon()}
	</button>
{:else if href}
	<a
		class="group/post-action inline-flex cursor-pointer items-center gap-2 text-sm"
		{href}
		target="_blank"
	>
		{@render icon()}
	</a>
{:else}
	<span class="inline-flex items-center gap-2 text-sm">
		{@render icon()}
	</span>
{/if}
