<script>
	import { Subheading } from '$lib/components/base/heading';
	import Heading from '$lib/components/base/heading/Heading.svelte';
	import Prose from '$lib/components/base/prose/Prose.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
</script>

<div class="w-full">
	<Prose>
		<h2>This is a heading</h2>
		<h3>And a subheading</h3>
		<p>This is my text, see <span class="text-accent-600 dark:text-accent-400 font-semibold">this link</span></p>
	</Prose>
</div>
