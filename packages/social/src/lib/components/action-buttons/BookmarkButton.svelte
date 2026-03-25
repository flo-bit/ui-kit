<script lang="ts">
	import type { BookmarkButtonProps } from './types';

	let { active = $bindable(false), onclick }: BookmarkButtonProps = $props();
</script>

{#snippet icon()}
	<span class="sr-only">Bookmark</span>
	{#if active}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="group-hover/post-action:bg-accent-500/10 text-accent-700 dark:text-accent-400 -m-1.5 size-7 rounded-full p-1.5 transition-all duration-100"
		>
			<path
				fill-rule="evenodd"
				d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
				clip-rule="evenodd"
			/>
		</svg>
	{:else}
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
				d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
			/>
		</svg>
	{/if}
{/snippet}

{#if onclick}
	<button
		class="group/post-action inline-flex cursor-pointer items-center gap-2 text-sm"
		{onclick}
	>
		{@render icon()}
	</button>
{:else}
	<span class="inline-flex items-center gap-2 text-sm">
		{@render icon()}
	</span>
{/if}
