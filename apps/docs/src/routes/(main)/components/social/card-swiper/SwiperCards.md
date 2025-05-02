<script lang="ts">
	import SwiperCardsExample from './Example.svelte';
</script>

# Swiper Cards

## Example

<SwiperCardsExample />

## Usage

```svelte
<script lang="ts">
	import { CardSwiper } from '@fuxui/social';

	const profiles = ['image1.webp', 'image2.webp', 'image3.webp'];
</script>

<div class="h-[70vh] w-full">
	<CardSwiper
		cardData={(i) => ({
			title: `Card ${i}`,
			description: `Card ${i} description`,
			image: profiles[i % profiles.length]
		})}
	></CardSwiper>
</div>
```
