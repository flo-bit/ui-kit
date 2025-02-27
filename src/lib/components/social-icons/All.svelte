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
		facebook
	}: {
		discord?: string;
		github?: string;
		twitter?: string;
		youtube?: string;
		bluesky?: string;
		facebook?: string;
	} = $props();
</script>

{#if discord}
	<Discord href={discord} />
{/if}
{#if github}
	<Github href={github} />
{/if}
{#if twitter}
	<Twitter href={twitter} />
{/if}
{#if youtube}
	<Youtube href={youtube} />
{/if}
{#if bluesky}
	<Bluesky href={bluesky} />
{/if}
{#if facebook}
	<Facebook href={facebook} />
{/if}
