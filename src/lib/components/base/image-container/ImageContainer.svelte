<script lang="ts">
	import { cn } from '$lib';
	import Image, { type ImageProps } from '../image/Image.svelte';

	let { ref = $bindable(null), containerClasses, ...restProps }: ImageProps = $props();
</script>

<Image
	bind:ref
	{...restProps}
	containerClasses={cn(
		'border-base-300 dark:border-base-700 overflow-hidden rounded-2xl border',
		containerClasses
	)}
/>
