<script lang="ts">
	import { Box } from '../box';
	import { Download } from '@jis3r/icons';

	let {
		title,
		description,
		fileUrl,
		fileName
	}: { title: string; description?: string; fileUrl: string; fileName?: string } = $props();

	fileName ??= fileUrl.split('/').pop()?.split('?')[0] || 'download';

	let hovered = $state(false);
</script>

<Box class="not-prose group" onmouseenter={() => (hovered = true)} onmouseleave={() => (hovered = false)}>
	<div class="flex flex-col gap-2">
		<h3
			class="text-base-950 dark:text-base-50 inline-flex items-center gap-2 text-lg font-semibold"
		>
			<Download size={20} strokeWidth={1.5} animate={hovered} />
			{title}
		</h3>

		{#if description}
			<p class="text-base-700 dark:text-base-300 text-xs">{description}</p>
		{/if}

		<a
			href={fileUrl}
			download={fileName}
			class="dark:group-hover:text-accent-400 group-hover:text-accent-600 mt-4 inline-flex items-center justify-center gap-2 self-start rounded-ui-sm font-medium transition-colors duration-200"
		>
			Download <span>&rarr;</span>
			<span class="absolute inset-0"></span>
		</a>
	</div>
</Box>
