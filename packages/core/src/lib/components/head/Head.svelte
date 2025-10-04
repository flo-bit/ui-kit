<script lang="ts">
	const {
		title,
		description,
		image,
		url,
		emojiFavicon
	}: {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		emojiFavicon?: string;
	} = $props();
</script>

<svelte:head>
	{#if emojiFavicon}
		<link
			rel="icon"
			href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{emojiFavicon}</text></svg>"
		/>
	{/if}

	<meta property="og:type" content="website" />

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}

	{#if title}
		<title>{title}</title>
		<meta property="og:title" content={title} />
		<meta name="twitter:title" content={title} />
	{/if}

	{#if image}
		<meta property="og:image" content={image} />
		<meta name="twitter:image" content={image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	{#if url}
		<meta property="twitter:domain" content={new URL(url).hostname} />
		<meta property="twitter:url" content={url} />
	{/if}
</svelte:head>
