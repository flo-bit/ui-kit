<script>
	import { Quote } from '@foxui/all';
	import einstein from '$lib/assets/images/einstein.webp';
</script>

<Quote
	quote="Hello there, this is a quote."
	author={{
		name: 'Einstein',
		role: 'Scientist',
		src: einstein
	}}
	useThemeColor
	class="scale-75"
/>
