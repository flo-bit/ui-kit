<script>
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import ScrollArea from '$lib/components/scroll-area/ScrollArea.svelte';
	import Text from '$lib/components/text/Text.svelte';

	let content = `Doggo ipsum puggorino shoob I am bekom fat. Clouds such treat big ol pupper vvv, porgo. Aqua
		doggo ur givin me a spook corgo heckin good boys heck much ruin diet, ur givin me a spook doggo
		such treat ur givin me a spook. What a nice floof extremely cuuuuuute waggy wags floofs dat
		tungg tho puggorino, smol aqua doggo dat tungg tho h*ck, sub woofer long doggo snoot you are
		doing me a frighten. Boofers heck porgo adorable doggo, many pats heckin good boys. Big ol blop
		very good spot aqua doggo, dat tungg tho pats smol borking doggo with a long snoot for pats,
		long bois smol. Lotsa pats borkf stop it fren heckin pupperino woofer, such treat very hand that
		feed shibe doge fluffer. what a nice floof vvv you are doin me a concern. Ruff you are doing me
		the shock boofers borkf smol borking doggo with a long snoot for pats, fluffer stop it fren many
		pats, doing me a frighten mlem ur givin me a spook. Stop it fren smol wow such tempt blep long
		woofer boofers, lotsa pats shooberino doge. corgo maximum borkdrive shibe. Many pats shoob
		heckin good boys I am bekom fat woofer, sub woofer long woofer. Very taste wow boof you are
		doing me a frighten very good spot boofers, stop it fren mlem. Length boy lotsa pats wow very
		biscit, blop. Snoot doggo length boy blep, length boy doing me a frighten. Big ol smol very
		taste wow adorable doggo, extremely cuuuuuute. borking doggo boofers. Long woofer porgo dat
		tungg tho boofers, blop borkdrive, h*ck mlem. Doing me a frighten long doggo blep such treat,
		adorable doggo smol. Such treat smol long bois most angery pupper I have ever seen, big ol
		pupper. Tungg much ruin diet fluffer shooberino blep aqua doggo, very taste wow very good spot
		aqua doggo big ol pupper pupper, long doggo very taste wow borking doggo puggo. Much ruin diet
		corgo you are doing me a frighten doing me a frighten, pupperino. Tungg waggy wags porgo heckin
		angery woofer ruff smol borking doggo with a long snoot for pats I am bekom fat, noodle horse
		thicc porgo many pats very hand that feed shibe, boof stop it fren heckin good boys and girls
		length boy super chub. Blop long water shoob puggorino yapper borkf, long woofer blep. I am
		bekom fat aqua doggo heck blep doggorino most angery pupper I have ever seen, pupper shoob
		floofs. Heckin angery woofer very jealous pupper I am bekom fat doggorino, porgo. Aqua doggo
		length boy ruff long bois shooberino, dat tungg tho very taste wow pupper. Clouds many pats doge
		heckin snoot, maximum borkdrive wow such tempt you are doin me a concern. Corgo puggorino smol
		borking doggo with a long snoot for pats super chub, fat boi h*ck. Dat tungg tho shoob much ruin
		diet very jealous pupper, floofs shibe he made many woofs woofer, heckin good boys pupperino.`;

	let classes = 'h-[200px] w-[350px] rounded-2xl border border-base-200 dark:border-base-800 text-base-900 dark:text-base-100 bg-base-100 dark:bg-base-900';
</script>

<Subheading class="mb-4">Scroll Area</Subheading>

<Text>Show on hover:</Text>

<ScrollArea type="hover" class={classes}>
	<div class="p-4">
		{content}
	</div>
</ScrollArea>

<Text>Show always:</Text>

<ScrollArea type="always" class={classes}>
	<div class="p-4">
		{content}
	</div>
</ScrollArea>

<Text>Show on scroll:</Text>

<ScrollArea type="scroll" class={classes}>
	<div class="p-4">
		{content}
	</div>
</ScrollArea>
