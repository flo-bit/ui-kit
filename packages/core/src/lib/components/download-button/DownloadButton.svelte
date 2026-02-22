<script lang="ts">
	import { Box } from '../box';

	let {
		title,
		description,
		fileUrl,
		fileName
	}: { title: string; description?: string; fileUrl: string; fileName?: string } = $props();

	fileName ??= fileUrl.split('/').pop()?.split('?')[0] || 'download';
</script>

<Box class="not-prose group">
	<div class="flex flex-col gap-2">
		<h3
			class="text-base-950 dark:text-base-50 inline-flex items-center gap-2 text-lg font-semibold"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
				/>
			</svg>
			{title}
		</h3>

		{#if description}
			<p class="text-base-700 dark:text-base-300 text-xs">{description}</p>
		{/if}

		<a
			href={fileUrl}
			download={fileName}
			class="dark:group-hover:text-accent-400 group-hover:text-accent-600 mt-4 inline-flex items-center justify-center gap-2 self-start rounded-lg font-medium transition-colors duration-200"
		>
			Download <span>&rarr;</span>
			<span class="absolute inset-0"></span>
		</a>
	</div>
</Box>
