<script>
	import { ImageMasonry } from '@foxui/all';

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
	import { toast } from '@foxui/all';

	const images = [
		{
			src: profile1,
			name: 'Image 1',
			width: 200,
			height: 300,
		},
		{
			src: profile2,
			name: 'Image 2',
			width: 200,
			height: 130
		},
		{
			src: profile3,
			name: 'Image 3',
			width: 200,
			height: 200,
		},
		{
			src: profile4,
			name: 'Image 4',
			width: 0.8
		},
		{
			src: profile5,
			name: 'Image 5',
			height: 1.5
		},
		{
			src: profile6,
			name: 'Image 6',
		},
		{
			src: profile7,
			name: 'Image 7',
			height: 0.7
		},
		{
			src: profile8,
			name: 'Image 8',
			height: 1.2
		}
	].map((image) => ({
		...image,
		onclick: () => {
			toast.success('clicked');
		}
	}));
</script>

<ImageMasonry {images} />
