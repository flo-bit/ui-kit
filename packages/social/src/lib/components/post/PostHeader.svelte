<script lang="ts">
	import { cn } from '@foxui/core';
	import type { PostHeaderProps } from './types';
	import { RelativeTime } from '@foxui/time';

	let {
		author,
		createdAt,
		timestamp,
		onclickhandle,
		showAvatar = true,
		compact = false,
		logo,
		target = '_blank',
		class: className
	}: PostHeaderProps = $props();
</script>

<div class={cn('flex gap-4', className)}>
	{#if showAvatar && author.avatar}
		{#if onclickhandle}
			<button
				class="shrink-0 cursor-pointer"
				onclick={() => onclickhandle(author.handle, author.href)}
			>
				<img
					src={author.avatar}
					alt=""
					class={compact ? 'size-7 rounded-full object-cover' : 'size-10 rounded-full object-cover'}
				/>
			</button>
		{:else}
			<a href={author.href} {target} class="flex-shrink-0">
				<img
					src={author.avatar}
					alt=""
					class={compact ? 'size-7 rounded-full object-cover' : 'size-10 rounded-full object-cover'}
				/>
			</a>
		{/if}
	{/if}

	<div class="w-full min-w-0">
		<div class="mb-1 flex items-start justify-between gap-2">
			<div class="flex items-start gap-4">
				{#if onclickhandle}
					<button
						class="hover:bg-accent-900/5 accent:hover:bg-accent-100/10 group/post-author -mx-2 -my-0.5 flex cursor-pointer flex-col items-baseline gap-x-2 gap-y-0.5 rounded-xl px-2 py-0.5 sm:flex-row"
						onclick={() => onclickhandle(author.handle, author.href)}
					>
						{#if author.displayName}
							<div
								class="text-base-900 group-hover/post-author:text-accent-600 dark:text-base-50 dark:group-hover/post-author:text-accent-300 accent:group-hover/post-author:text-accent-950 line-clamp-1 text-sm leading-tight font-semibold"
							>
								{author.displayName}
							</div>
						{/if}
						<div
							class={cn(
								'group-hover/post-author:text-accent-600 dark:group-hover/post-author:text-accent-400 accent:text-accent-950 accent:group-hover/post-author:text-accent-900 text-sm',
								!author.displayName
									? 'text-base-900 dark:text-base-50 font-semibold'
									: 'text-base-600 dark:text-base-400'
							)}
						>
							@{author.handle}
						</div>
					</button>
				{:else if author.href}
					<a
						class="hover:bg-accent-900/5 accent:hover:bg-accent-100/10 group/post-author -mx-2 -my-0.5 flex flex-col items-baseline gap-x-2 gap-y-0.5 rounded-xl px-2 py-0.5 sm:flex-row"
						href={author.href}
						{target}
					>
						{#if author.displayName}
							<div
								class="text-base-900 group-hover/post-author:text-accent-600 dark:text-base-50 dark:group-hover/post-author:text-accent-300 accent:group-hover/post-author:text-accent-950 line-clamp-1 text-sm leading-tight font-semibold"
							>
								{author.displayName}
							</div>
						{/if}
						<div
							class={cn(
								'group-hover/post-author:text-accent-600 dark:group-hover/post-author:text-accent-400 accent:text-accent-950 accent:group-hover/post-author:text-accent-900 text-sm',
								!author.displayName
									? 'text-base-900 dark:text-base-50 font-semibold'
									: 'text-base-600 dark:text-base-400'
							)}
						>
							@{author.handle}
						</div>
					</a>
				{:else}
					<div
						class="-mx-2 -my-0.5 flex flex-col items-baseline gap-x-2 gap-y-0.5 rounded-xl px-2 py-0.5 sm:flex-row"
					>
						<div class="text-base-900 dark:text-base-50 text-sm leading-tight font-semibold">
							{author.displayName}
						</div>
						<div class="text-base-600 dark:text-base-400 accent:text-accent-950 text-sm">
							@{author.handle}
						</div>
					</div>
				{/if}

				<span class="text-base-400 dark:text-base-600 text-sm">&middot;</span>

				{#if timestamp?.href}
					<a
						href={timestamp.href}
						{target}
						class={cn(
							'text-base-600 dark:text-base-400 accent:text-accent-950 hover:text-accent-600 dark:hover:text-accent-400 block no-underline',
							compact ? 'text-xs' : 'text-sm'
						)}
					>
						<RelativeTime date={new Date(createdAt)} locale="en" />
					</a>
				{:else if timestamp?.onclick}
					<button
						onclick={timestamp.onclick}
						class={cn(
							'text-base-600 dark:text-base-400 accent:text-accent-950 hover:text-accent-600 dark:hover:text-accent-400 block cursor-pointer',
							compact ? 'text-xs' : 'text-sm'
						)}
					>
						<RelativeTime date={new Date(createdAt)} locale="en" />
					</button>
				{:else}
					<div
						class={cn(
							'text-base-600 dark:text-base-400 accent:text-accent-950 block no-underline',
							compact ? 'text-xs' : 'text-sm'
						)}
					>
						<RelativeTime date={new Date(createdAt)} locale="en" />
					</div>
				{/if}
			</div>

			{#if logo}
				{@render logo?.()}
			{/if}
		</div>

	</div>
</div>
