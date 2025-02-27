<script>
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Quote from '$lib/components/quote/Quote.svelte';
</script>

<Subheading class="mb-4">Quote</Subheading>

<Quote
	quote="Doggo ipsum you are doing me a frighten wrinkler you are doin me a concern super chub
				pupper, very jealous pupper much ruin diet I am bekom fat."
	author={{
		name: 'Shadcn',
		role: 'Creator of shadcn/ui',
		src: 'https://github.com/shadcn.png',
		fallback: 'SH'
	}}
	imageUseThemeColor
/>
