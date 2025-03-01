<script lang="ts">
	import Discord from './Discord.svelte';
	import Github from './Github.svelte';
	import Twitter from './Twitter.svelte';
	import Youtube from './Youtube.svelte';
	import Bluesky from './Bluesky.svelte';
	import Facebook from './Facebook.svelte';

	const {
		discord,
		github,
		twitter,
		youtube,
		bluesky,
		facebook,
		svgClasses
	}: {
		discord?: string;
		github?: string;
		twitter?: string;
		youtube?: string;
		bluesky?: string;
		facebook?: string;
		svgClasses?: string;
	} = $props();
</script>

<div class="flex gap-4 flex-wrap items-center">
	{#if discord}
		<Discord href={discord} {svgClasses} />
	{/if}
	{#if github}
		<Github href={github} {svgClasses} />
	{/if}
	{#if twitter}
		<Twitter href={twitter} {svgClasses} />
	{/if}
	{#if youtube}
		<Youtube href={youtube} {svgClasses} />
	{/if}
	{#if bluesky}
		<Bluesky href={bluesky} {svgClasses} />
	{/if}
	{#if facebook}
		<Facebook href={facebook} {svgClasses} />
	{/if}
</div>
