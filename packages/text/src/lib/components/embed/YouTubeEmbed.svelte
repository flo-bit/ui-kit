<script lang="ts">
	let { url, data, selected }: { url: string; data: Record<string, any>; selected: boolean } =
		$props();
</script>

<div class="w-full rounded-ui-sm {selected ? 'ring-2 ring-accent-500' : ''}">
	<iframe
		src="https://www.youtube-nocookie.com/embed/{data.videoId}"
		title={url}
		class="aspect-video w-full rounded-ui-sm border-0"
		allowfullscreen
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	></iframe>
</div>
