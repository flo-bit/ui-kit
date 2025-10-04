<script lang="ts">
	import { Badge, Button } from '@foxui/core';

	const {
		title,
		description,
		date,
		image,
		tags,
		href
	}: {
		title: string;
		description: string;
		date: Date;
		image?: string;
		tags?: (
			| {
					tag: string;
					href: string;
			  }
			| string
		)[];
		href: string;
	} = $props();
</script>

<article class="group relative isolate flex w-full flex-col gap-8 md:flex-row">
	{#if image}
		<div class="relative aspect-[16/9] md:w-64 md:shrink-0">
			<img
				src={image}
				alt=""
				class="bg-base-50 dark:bg-base-900 absolute inset-0 h-full w-full rounded-2xl object-cover"
			/>

			<div
				class="ring-base-900/10 dark:ring-base-100/10 absolute inset-0 rounded-2xl ring-1 ring-inset"
			></div>
		</div>
	{/if}
	<div>
		<div class={'flex max-h-8.5 flex-wrap items-center gap-2 overflow-hidden p-1 text-xs'}>
			<time datetime={date.toISOString()} class="text-base-500 mr-2 shrink-0">
				{date.toLocaleDateString('en-us', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})}
			</time>
			{#if tags}
				{#each tags as tag}
					{#if typeof tag === 'object'}
						<Button href={tag.href} size="sm" class="z-10 max-w-64 justify-start overflow-hidden">
							{tag.tag}
						</Button>
					{:else}
						<Badge size="sm" class="z-10 max-w-64 justify-start overflow-hidden">
							{tag}
						</Badge>
					{/if}
				{/each}
			{/if}
		</div>
		<div class="max-w-xl">
			<div class="text-base-900 dark:text-base-50 mt-3 text-lg leading-6 font-semibold">
				<a {href}>
					<span class="absolute inset-0"></span>
					{title}
				</a>

				<div
					class="bg-base-200/30 dark:bg-base-800/30 absolute -inset-2 -z-10 scale-95 opacity-0 transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl md:-inset-4"
				></div>
			</div>
			<p class="text-base-600 dark:text-base-400 mt-5 line-clamp-2 text-sm leading-6">
				{@html description}
			</p>
		</div>
	</div>
</article>
