<script lang="ts">
	import { cn } from '../../utils';
	import { Image, type ImageProps } from '../image';

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
