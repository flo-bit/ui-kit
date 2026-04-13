<script lang="ts">
	import type { APISchema, PropSchema } from '$lib/types/schema';
	import { Button, Popover, Badge } from '@foxui/all';
	import { Info } from '@foxui/all/icons';

	const { props: schema }: { props: APISchema } = $props();

	let entries = $derived(Object.entries(schema.props ?? {}) as [string, PropSchema][]);

	function isComponent(value: unknown): value is import('svelte').Component {
		return typeof value === 'function';
	}
</script>

{#snippet infoIcon()}
	<Info size={16} strokeWidth={1.5} />
{/snippet}

{#snippet tagBadges(prop: PropSchema)}
	{#if prop.required}
		<Badge variant="primary" class="w-fit">required</Badge>
	{/if}
	{#if prop.bindable}
		<Badge variant="primary_shift" class="w-fit">$bindable</Badge>
	{/if}
{/snippet}

{#snippet typeDisplay(prop: PropSchema)}
	{#if typeof prop.type === 'string'}
		<span class="font-mono text-sm text-base-500 dark:text-base-400">{prop.type}</span>
	{:else}
		<span class="flex items-center gap-1">
			<span class="font-mono text-sm text-base-500 dark:text-base-400">{prop.type.type}</span>
			<Popover side="top" sideOffset={8}>
				{#snippet child({ props: popoverProps })}
					<Button {...popoverProps} variant="ghost" size="iconSm" class="text-base-400 hover:text-base-600 dark:text-base-500 dark:hover:text-base-300 size-5 p-0">
						{@render infoIcon()}
					</Button>
				{/snippet}
				<div class="max-w-xs text-sm">
					{#if typeof prop.type.definition === 'string'}
						<pre class="overflow-x-auto rounded-ui-sm bg-base-800/50 dark:bg-base-900/50 p-2.5 font-mono text-xs text-base-200">{prop.type.definition}</pre>
					{:else if isComponent(prop.type.definition)}
						{@const DefinitionComponent = prop.type.definition}
						<DefinitionComponent />
					{/if}
				</div>
			</Popover>
		</span>
	{/if}
{/snippet}

{#snippet defaultValue(prop: PropSchema)}
	{#if !prop.required}
		<span class="mt-1 text-xs text-base-500 dark:text-base-400">
			Default: {#if prop.default}<code class="font-mono text-xs">{prop.default}</code>{:else}<span class="text-base-400 dark:text-base-500">&mdash;</span>{/if}
		</span>
	{/if}
{/snippet}

<div class="not-prose mt-10">
	<!-- Title -->
	<div class="mb-4">
		<h4 class="text-base-900 dark:text-base-50 text-lg font-semibold">{schema.title}</h4>
		{#if schema.description}
			<p class="mt-1 text-sm text-base-500 dark:text-base-400">{schema.description}</p>
		{/if}
	</div>

	{#if entries.length > 0}
		<!-- Desktop: 3-column grid (md+) -->
		<div class="hidden md:block">
			<!-- Header -->
			<div class="grid grid-cols-[1fr_1fr_1.5fr] gap-4 border-b border-base-200/50 dark:border-base-800/50 pb-2">
				<span class="text-xs font-medium uppercase tracking-wide text-base-500 dark:text-base-400">Property</span>
				<span class="text-xs font-medium uppercase tracking-wide text-base-500 dark:text-base-400">Type</span>
				<span class="text-xs font-medium uppercase tracking-wide text-base-500 dark:text-base-400">Description</span>
			</div>

			<!-- Rows -->
			{#each entries as [key, prop] (key)}
				<div class="grid grid-cols-[1fr_1fr_1.5fr] gap-4 border-b border-base-200/50 dark:border-base-800/50 py-3">
					<!-- Property -->
					<div class="flex flex-col gap-1.5">
						<span class="text-sm font-semibold font-mono text-base-900 dark:text-base-100">{key}</span>
						{@render tagBadges(prop)}
					</div>

					<!-- Type -->
					<div class="flex items-start pt-0.5">
						{@render typeDisplay(prop)}
					</div>

					<!-- Description -->
					<div class="flex flex-col">
						<span class="text-sm text-base-600 dark:text-base-400">{prop.description}</span>
						{@render defaultValue(prop)}
					</div>
				</div>
			{/each}
		</div>

		<!-- Mobile: compact list (below md) -->
		<div class="block md:hidden">
			<!-- Header -->
			<div class="border-b border-base-200/50 dark:border-base-800/50 pb-2">
				<span class="text-xs font-medium uppercase tracking-wide text-base-500 dark:text-base-400">Property</span>
			</div>

			<!-- Rows -->
			{#each entries as [key, prop] (key)}
				<div class="flex items-center justify-between border-b border-base-200/50 dark:border-base-800/50 py-3">
					<span class="text-sm font-semibold font-mono text-base-900 dark:text-base-100">{key}</span>

					<Popover side="left" sideOffset={8}>
						{#snippet child({ props: popoverProps })}
							<Button {...popoverProps} variant="ghost" size="icon" class="text-base-400 hover:text-base-600 dark:text-base-500 dark:hover:text-base-300">
								<Info size={20} strokeWidth={1.5} />
							</Button>
						{/snippet}
						<div class="w-64 space-y-3 text-sm">
							<!-- Property name + tags -->
							<div class="flex items-center justify-between">
								<span class="font-mono font-semibold text-base-900 dark:text-base-50">{key}</span>
								<div class="flex gap-1">
									{@render tagBadges(prop)}
								</div>
							</div>

							<!-- Type -->
							<div class="rounded-ui-sm bg-base-800/50 dark:bg-base-900/50 p-2.5">
								{#if typeof prop.type === 'string'}
									<code class="font-mono text-xs text-base-200">{prop.type}</code>
								{:else}
									<code class="font-mono text-xs text-base-200">{prop.type.type}</code>
									{#if typeof prop.type.definition === 'string'}
										<pre class="mt-1 overflow-x-auto font-mono text-xs text-base-300">{prop.type.definition}</pre>
									{:else if isComponent(prop.type.definition)}
										{@const DefinitionComponent = prop.type.definition}
										<div class="mt-1">
											<DefinitionComponent />
										</div>
									{/if}
								{/if}
							</div>

							<!-- Description -->
							<div>
								<span class="mb-1 block text-xs font-medium uppercase tracking-wide text-base-500 dark:text-base-400">Description</span>
								<span class="text-base-600 dark:text-base-300">{prop.description}</span>
							</div>

							<!-- Default -->
							{#if !prop.required}
								<div class="text-xs text-base-500 dark:text-base-400">
									Default: {#if prop.default}<code class="font-mono">{prop.default}</code>{:else}<span>&mdash;</span>{/if}
								</div>
							{/if}
						</div>
					</Popover>
				</div>
			{/each}
		</div>
	{/if}
</div>
