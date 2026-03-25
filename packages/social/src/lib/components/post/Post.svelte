<script lang="ts">
	import { cn, sanitize } from '@foxui/core';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PostProps } from './types';
	import Embed from '../embed/Embed.svelte';
	import PostHeader from './PostHeader.svelte';
	import { ActionButtons } from '../action-buttons';

	let {
		ref = $bindable(),
		data,
		class: className,

		embeds,
		showSensitive = true,

		actions,

		onclickhandle,

		timestamp,

		children,

		logo,

		showAvatar = true,
		compact = false,
		target = '_blank'
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & PostProps = $props();
</script>

<div
	bind:this={ref}
	class={cn('text-base-950 dark:text-base-50 transition-colors duration-200', className)}
>
	{#if data.reposted}
		<div class="mb-3 inline-flex items-center gap-2 text-xs">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-3"
			>
				<path
					fill-rule="evenodd"
					d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
					clip-rule="evenodd"
				/>
			</svg>

			<div class="inline-flex gap-1">
				reposted by
				{#if onclickhandle}
					<button
						class="hover:text-accent-600 dark:hover:text-accent-400 cursor-pointer font-bold"
						onclick={() => onclickhandle(data.reposted!.handle, data.reposted!.href)}
					>
						@{data.reposted.handle}
					</button>
				{:else}
					<a
						href={data.reposted.href}
						{target}
						class="hover:text-accent-600 dark:hover:text-accent-400 font-bold"
					>
						@{data.reposted.handle}
					</a>
				{/if}
			</div>
		</div>
	{/if}
	{#if data.replyTo}
		<div class="mb-3 inline-flex items-center gap-2 text-xs">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-3"
			>
				<path
					fill-rule="evenodd"
					d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>

			<div class="inline-flex gap-1">
				replying to
				{#if onclickhandle}
					<button
						class="hover:text-accent-600 dark:hover:text-accent-400 cursor-pointer font-bold"
						onclick={() => onclickhandle(data.replyTo!.handle, data.replyTo!.href)}
					>
						@{data.replyTo.handle}
					</button>
				{:else}
					<a
						href={data.replyTo.href}
						{target}
						class="hover:text-accent-600 dark:hover:text-accent-400 font-bold"
					>
						@{data.replyTo.handle}
					</a>
				{/if}
			</div>
		</div>
	{/if}

	<div class="flex gap-4">
		{#if showAvatar && data.author.avatar}
			{#if onclickhandle}
				<button
					class="shrink-0 cursor-pointer"
					onclick={() => onclickhandle(data.author.handle, data.author.href)}
				>
					<img
						src={data.author.avatar}
						alt=""
						class={compact ? 'size-7 rounded-full object-cover' : 'size-10 rounded-full object-cover'}
					/>
				</button>
			{:else}
				<a href={data.author.href} {target} class="flex-shrink-0">
					<img
						src={data.author.avatar}
						alt=""
						class={compact ? 'size-7 rounded-full object-cover' : 'size-10 rounded-full object-cover'}
					/>
				</a>
			{/if}
		{/if}

		<div class="w-full min-w-0">
			<PostHeader
				author={data.author}
				createdAt={data.createdAt}
				{timestamp}
				{onclickhandle}
				showAvatar={false}
				{compact}
				{logo}
				{target}
			/>

			<div class={cn('post-content wrap-break-word', compact ? 'text-sm' : 'text-base')}>
				{#if data.htmlContent}
					{@html sanitize(data.htmlContent, { ADD_ATTR: ['target'] })}
				{:else}
					{@render children?.()}
				{/if}
			</div>

			{#if embeds?.length}
				{#each embeds as embed}
					<Embed {embed} {showSensitive} />
				{/each}
			{/if}

			{#if actions}
				<ActionButtons
					{...actions}
					class={cn('mt-4', actions.class)}
				/>
			{/if}
		</div>
	</div>
</div>

<style>
	.post-content :global(a) {
		color: var(--color-accent-600);
	}

	:global(.dark) .post-content :global(a) {
		color: var(--color-accent-400);
	}
</style>
