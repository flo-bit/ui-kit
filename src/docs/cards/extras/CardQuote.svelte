<script>
	import { Quote } from '$lib';
	import einstein from '$docs/assets/images/einstein.png?as=run';
</script>

<Quote
	quote="Hello there, this is a quote."
	author={{
		name: 'Einstein',
		role: 'Scientist',
		src: einstein,
	}}
	useThemeColor
	class="scale-75"
/>
