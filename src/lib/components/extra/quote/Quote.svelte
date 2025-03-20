<script lang="ts">
	import {
		Avatar as AvatarPrimitive,
		type WithElementRef,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import Avatar from '$lib/components/base/avatar/Avatar.svelte';

	let {
		quote,
		author,
		role,

		ref = $bindable(null),

		useThemeColor = false,

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

		useThemeColor?: boolean;
	} = $props();
</script>

<div
	class={cn(
		'flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-6',
		className
	)}
	bind:this={ref}
	{...restProps}
>
	<div class="h-24 w-24 shrink-0 md:h-32 md:w-32">
		<Avatar
			{useThemeColor}
			fallback={author?.fallback}
			src={author?.src}
			alt={author?.alt}
			class="size-24 rounded-2xl text-3xl md:size-32 object-cover"
		/>
	</div>
	<div class="flex flex-col gap-2">
		<blockquote class="text-base-900 dark:text-base-50 text-lg font-medium">
			<p>
				"{quote}"
			</p>
		</blockquote>

		<div class="flex items-center gap-2 text-sm">
			<div class="text-accent-600 dark:text-accent-500 font-medium">{author?.name}</div>

			<div class="text-base-600 dark:text-base-400">{author?.role}</div>
		</div>
	</div>
</div>
