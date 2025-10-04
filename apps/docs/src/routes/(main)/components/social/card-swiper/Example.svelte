<script lang="ts">
	import { Button } from '@foxui/all';
	import { CardSwiper } from '@foxui/all';

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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
		</Button>
		<Button onclick={() => swipe('right')} size="iconLg">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
				/>
			</svg>
		</Button>
	</div>
</div>
