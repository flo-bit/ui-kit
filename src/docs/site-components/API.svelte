<script lang="ts">
	import type { APISchema } from '$docs/types/schema';
	import Badge from '$lib/components/base/badge/Badge.svelte';

	const props: APISchema = {
		title: 'Accordion',
		description: 'A component that displays a list of items in an accordion format.',
		props: {
			items: {
				type: 'array',
				description: 'An array of items to display in the accordion.',
				required: true
			},
			open: { type: 'boolean', description: 'Whether the accordion is open.', bindable: true }
		}
	};
</script>

<table class="text-base-900 dark:text-base-50 not-prose divide-base-900 min-w-full divide-y">
	<thead>
		<tr>
			<th scope="col" class="hidden px-1 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Property</th
			>
			<th scope="col" class="hidden px-1 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Type</th
			>
			<th scope="col" class="hidden px-1 py-3.5 text-left text-sm font-semibold md:table-cell"
				>Description</th
			>
		</tr>
	</thead>
	<tbody class="divide-base-900 divide-y text-sm">
		{#each Object.entries(props.props) as [key, prop]}
			<tr class="flex flex-col py-2 md:table-row">
				<td class="my-2 table-cell px-1 py-1.5 whitespace-nowrap">
					<span class="mb-1 block font-semibold md:hidden">Property</span>

					<div class="flex flex-row gap-2 md:flex-col md:gap-1">
						<span class="text-base-100">{key}</span>
						{#if prop.required}
							<Badge variant="primary" class="w-fit">required</Badge>
						{:else if prop.bindable}
							<Badge variant="primary_shift" class="w-fit">bindable</Badge>
						{/if}
					</div>
				</td>
				<td class="text-base-200 table-cell px-1 py-2 align-top whitespace-nowrap">
					<span class="mb-1 block font-semibold md:hidden">Type</span>

					<span class="text-base-400">{prop.type}</span>
				</td>
				<td class="text-base-200 table-cell px-1 py-2 align-top whitespace-nowrap">
					<span class="mb-1 block font-semibold md:hidden">Description</span>
					<span class="text-base-400">{prop.description}</span>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
