<script>
	import CardSwiper from "$lib/components/extra/swiper-cards/CardSwiper.svelte";

</script>

<div class="w-full h-[70vh]">
<CardSwiper cardData={(i) => ({
	title: `Card ${i}`,
	description: `Card ${i} description`,
	image: `https://picsum.photos/200/1000?${i}`
})} />

</div>