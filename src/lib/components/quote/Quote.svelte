<script lang="ts">
	import {
		Avatar as AvatarPrimitive,
		type WithElementRef,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		quote,
		author,
		role,

		ref = $bindable(null),

		imageUseThemeColor = false,

		class: className,
		...restProps
	}: WithoutChildrenOrChild<WithElementRef<HTMLAttributes<HTMLDivElement>>> & {
		quote?: string;
		author?: {
			src?: string;
			alt?: string;
			fallback?: string;

			role?: string;
			name?: string;

			avatarClass?: string;
			fallbackClass?: string;
			imageClass?: string;
		};

		imageUseThemeColor?: boolean;
	} = $props();
</script>

<div
	class={[
		'flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-6',
		className
	]}
	bind:this={ref}
	{...restProps}
>
	<div class="h-24 w-24 shrink-0 md:h-32 md:w-32">
		<AvatarPrimitive.Root
			class={[
				'relative flex h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-base-200 bg-base-100 text-base-900 dark:border-base-800 dark:bg-base-900 dark:text-base-50 md:h-32 md:w-32',
				className
			]}
		>
			{#if imageUseThemeColor}
				<div class="absolute inset-0 z-20 size-full bg-accent-500/30"></div>
			{/if}
			{#if author?.src}
				<AvatarPrimitive.Image
					class={['aspect-square size-full object-cover', author.imageClass]}
					src={author.src}
					alt={author.alt}
					style={{ filter: imageUseThemeColor ? 'grayscale(100%) brightness(1.2)' : '' }}
				/>
			{/if}

			{#if author?.fallback}
				<AvatarPrimitive.Fallback
					class={['flex size-full items-center justify-center', author.fallbackClass]}
				>
					{author.fallback}
				</AvatarPrimitive.Fallback>
			{/if}
		</AvatarPrimitive.Root>
	</div>
	<div class="flex flex-col gap-2">
		<blockquote class="text-lg font-medium text-base-900 dark:text-base-50">
			<p>
				"{quote}"
			</p>
		</blockquote>

		<div class="flex items-center gap-2 text-sm">
			<div class="font-medium text-accent-600 dark:text-accent-500">{author?.name}</div>

			<div class="text-base-600 dark:text-base-400">{author?.role}</div>
		</div>
	</div>
</div>
