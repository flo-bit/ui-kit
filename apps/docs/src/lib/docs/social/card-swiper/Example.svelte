<script lang="ts">
	import { Button } from '@foxui/all';
	import { CardSwiper } from '@foxui/all';
	import { X, Heart } from '@foxui/all/icons';

	import profile1 from '$lib/assets/profiles/0.webp';
	import profile2 from '$lib/assets/profiles/1.webp';
	import profile3 from '$lib/assets/profiles/2.webp';
	import profile4 from '$lib/assets/profiles/3.webp';
	import profile5 from '$lib/assets/profiles/4.webp';
	import profile6 from '$lib/assets/profiles/5.webp';
	import profile7 from '$lib/assets/profiles/6.webp';
	import profile8 from '$lib/assets/profiles/7.webp';
	import profile9 from '$lib/assets/profiles/8.webp';
	import profile10 from '$lib/assets/profiles/9.webp';

	const profiles = [
		profile1,
		profile2,
		profile3,
		profile4,
		profile5,
		profile6,
		profile7,
		profile8,
		profile9,
		profile10
	];

	let swipe: (direction: 'left' | 'right') => void;
</script>

<div class="not-prose relative h-[50vh] max-w-sm w-full mx-auto">
	<CardSwiper
		cardData={(i) => ({
			title: `Card ${i}`,
			description: `Card ${i} description`,
			image: profiles[i % profiles.length]
		})}
		bind:swipe
	></CardSwiper>

	<div class="absolute bottom-2 flex w-full justify-between px-2">
		<Button onclick={() => swipe('left')} size="iconLg">
			<X size={24} strokeWidth={2.5} />
		</Button>
		<Button onclick={() => swipe('right')} size="iconLg">
			<Heart size={24} strokeWidth={2} />
		</Button>
	</div>
</div>
