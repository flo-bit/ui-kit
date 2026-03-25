## Usage

### Images

```svelte
<EmbedImages
	data={{
		type: 'images',
		images: [
			{
				alt: 'A photo',
				thumb: 'https://example.com/thumb.jpg',
				fullsize: 'https://example.com/full.jpg',
				aspectRatio: { width: 4, height: 3 }
			}
		]
	}}
	onclickimage={(image) => console.log(image)}
/>
```

### External Link

```svelte
<EmbedExternal
	data={{
		type: 'external',
		external: {
			href: 'https://example.com',
			thumb: 'https://example.com/og.jpg',
			title: 'Example Site',
			description: 'A description of the link'
		}
	}}
/>
```

### Video

```svelte
<EmbedVideo
	data={{
		type: 'video',
		video: {
			playlist: 'https://example.com/video.m3u8',
			thumb: 'https://example.com/poster.jpg',
			alt: 'A video',
			aspectRatio: { width: 16, height: 9 }
		}
	}}
/>
```

### Sensitive Content

The `EmbedImages` and `EmbedVideo` components support a `sensitive` prop that hides the content behind a click-to-reveal overlay.

```svelte
<EmbedImages sensitive data={...} />
<EmbedVideo sensitive data={...} />
```
