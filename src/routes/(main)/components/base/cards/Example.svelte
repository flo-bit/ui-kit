<script>
	import { ImageCard } from '$lib';

	import nature1 from '$docs/assets/images/nature1.jpg?as=run';
	import nature2 from '$docs/assets/images/nature2.jpg?as=run';
	import nature3 from '$docs/assets/images/nature3.jpg?as=run';
	import { toast } from 'svelte-sonner';
</script>

<h3>Full width</h3>

<ImageCard
	src={nature1}
	alt="Nature 1"
	title="Hello World"
	description="Just wanted to say hello to everyone on this beautiful planet, been traveling a lot lately and wanted to share some of the places I've been to."
	href="#"
	class="not-prose mb-16"
/>

<h3>In a grid</h3>

<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 not-prose">
	<ImageCard
		src={nature1}
		alt="Nature 1"
		title="Best places to visit"
		description="This is such a long description, that it will probably be cut off and truncated after the first two lines."
		href="#"
	/>
	<ImageCard
		src={nature2}
		alt="Nature 2"
		title="This is a beautiful place"
		description="This card will show a toast when clicked"
		onclick={() => toast('Hello World')}
	/>
	<ImageCard
		src={nature3}
		alt="Nature 3"
		title="Traveling is fun"
		description="But this card is not clickable"
	/>
</div>
