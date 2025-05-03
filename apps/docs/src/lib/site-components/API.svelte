<script lang="ts">
	import type { APISchema } from '$lib/types/schema';
	import { Button, Popover, Badge } from '@fuxui/base';

	const { props }: { props: APISchema } = $props();
</script>

<h4 class="not-prose text-base-900 dark:text-base-50 mt-12 mb-2 text-lg font-semibold">
	{props.title}
</h4>

<table
	class="text-base-900 dark:text-base-50 not-prose divide-base-200 dark:divide-base-900 min-w-full divide-y"
>
	<thead>
		<tr>
			<th scope="col" class="hidden px-1 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Property</th
			>
			<th scope="col" class="hidden px-5 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Type</th
			>
			<th scope="col" class="hidden px-1 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Description</th
			>
		</tr>
	</thead>
	<tbody class="divide-base-200 dark:divide-base-900 divide-y text-sm">
		{#each Object.entries(props.props ?? {}) as [key, prop]}
			<tr class="flex flex-col py-2 md:table-row">
				<td class="my-2 table-cell px-1 py-3 align-top">
					<div class="flex flex-row gap-1 md:flex-col md:gap-1">
						<span class="text-base-900 dark:text-base-100 text-base font-semibold md:text-sm"
							>{key}</span
						>
						{#if prop.required}
							<Badge variant="primary" class="w-fit">required</Badge>
						{:else if prop.bindable}
							<Badge variant="primary_shift" class="w-fit">bindable</Badge>
						{/if}
					</div>
				</td>
				<td class="table-cell px-2 py-3 align-top md:px-6">
					<span class="text-base-800 dark:text-base-200 mb-1 block font-medium md:hidden">Type</span
					>

					<span class="text-base-600 dark:text-base-400 flex flex-row items-center gap-1">
						{#if typeof prop.type === 'string'}
							<span>{prop.type}</span>
						{:else}
							<span class="hidden md:block">{prop.type.type}</span>
							<Popover>
								{#snippet child({ props })}
									<Button {...props} variant="link" class="hidden p-0 md:block">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="size-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
											/>
										</svg>
									</Button>
								{/snippet}
								{prop.type.definition}
							</Popover>
							<span class="block md:hidden">{prop.type.definition}</span>
						{/if}
					</span>

					{#if prop.default}
						<Badge variant="primary_shift_2" class="w-fit">default: {prop.default}</Badge>
					{/if}
				</td>
				<td class="table-cell px-2 py-3 align-top">
					<span class="text-base-800 dark:text-base-200 mb-1 block font-medium md:hidden"
						>Description</span
					>
					<span class="text-base-600 dark:text-base-400">{prop.description}</span>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
