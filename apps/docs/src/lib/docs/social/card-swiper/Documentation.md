## Usage

```svelte
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
