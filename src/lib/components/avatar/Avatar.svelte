<script lang="ts">
	import { Avatar as AvatarPrimitive, type WithoutChildrenOrChild } from 'bits-ui';

	let {
		src,
		alt,
		fallback,
		ref = $bindable(null),

		imageRef = $bindable(null),
		imageClass,

		fallbackRef = $bindable(null),
		fallbackClass,

		class: className,
		...restProps
	}: WithoutChildrenOrChild<AvatarPrimitive.RootProps> & {
		fallback?: string;
		imageRef?: HTMLImageElement | null;
		imageClass?: string;
		fallbackRef?: HTMLElement | null;
		fallbackClass?: string;

		src?: string;
		alt?: string;
	} = $props();
</script>

<AvatarPrimitive.Root
	class={[
		'relative flex size-10 shrink-0 overflow-hidden rounded-full border border-base-200 bg-base-100 text-base-900 dark:border-base-800 dark:bg-base-900 dark:text-base-50',
		className
	]}
	{...restProps}
	bind:ref
>
	{#if src}
		<AvatarPrimitive.Image
			class={['aspect-square size-full', imageClass]}
			{src}
			{alt}
			bind:ref={imageRef}
		/>
	{/if}

	{#if fallback}
		<AvatarPrimitive.Fallback
			bind:ref={fallbackRef}
			class={['flex size-full items-center justify-center', fallbackClass]}
		>
			{fallback}
		</AvatarPrimitive.Fallback>
	{/if}
</AvatarPrimitive.Root>
