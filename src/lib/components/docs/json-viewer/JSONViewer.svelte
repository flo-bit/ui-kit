<script lang="ts">
	import Self from './JSONViewer.svelte';

	let {
		object = {
			name: 'John Doe',
			address: {
				street: '123 Main St',
				city: 'Anytown',
				test: {
					hello: 'world'
				},
				test2: [
					123,
					345,
					567
				]
			},
			phoneNumbers: ['555-1234', '555-5678', '555-9012', 1234, {
				hello: 'world',
				general: 'kenobi'
			}],
			test: 123,
			isTopLevel: false,
			testNull: null
		},
		name = '',
		level = 0
	} = $props();
</script>

{#if typeof object === 'object' && object}
	<details open>
		<summary data-children={Object.keys(object).length}>
			<span class="key">{name}</span>
		</summary>

		{#if Array.isArray(object)}
			<ol role="group" class="array">
				{#each object as value, index}
					<li role="treeitem" aria-level={level + 1}>
						<Self object={value} level={level + 1} />
					</li>
				{/each}
			</ol>
		{:else}
			<ul role="tree">
				{#each Object.entries(object) as [key, value]}
					<li role="treeitem" aria-level={level + 1}>
						<Self object={value} name={key} level={level + 1} />
					</li>
				{/each}
			</ul>
		{/if}
	</details>
{:else}
	{#if name}
		<span class="key">{name}</span>
	{/if}
	{#if object === null}
		<span class="value null">null</span>
	{:else if typeof object === 'undefined'}
		<span class="value undefined">undefined</span>
	{:else}
		<span class="value {typeof object}">{object}</span>
	{/if}
{/if}

<style>
	*::before,
	*::after {
		color: var(--color-neutral-500);
	}

	:global(li > .key) {
		display: inline-block;
		&::before {
			content: '"';
		}
		&::after {
			content: '":';
		}
	}
	:global(li[role='treeitem'] > .key) {
		margin-left: 0.5rem;
	}
	details {
		& > summary {
			padding: 0 1ch;
			border-radius: 4px;
		}
		& > ul,
		& > ol {
			margin-left: 14px;
			border-left: 2px solid var(--color-base-300);
			padding-left: 1rem;
		}

		& > summary:hover {
			cursor: pointer;
			background-color: var(--color-base-100);
		}
		& > summary > .key::before {
			content: '"';
		}
		&:has(> ul) > summary::after {
			content: '": { ' attr(data-children) ' items }';
			margin-left: -1ch;
		}
		&:has(> ul):is([open], :popover-open, :open) > summary::after {
			content: '": {';
		}
		&:has(> ul):is([open], :popover-open, :open)::after {
			content: '}';
			margin-left: 1ch;
		}

		&:has(> ol) > summary::after {
			content: '": [ ' attr(data-children) ' items ]';
			margin-left: -1ch;
		}
		&:has(> ol):is([open], :popover-open, :open) > summary::after {
			content: '": [';
		}
		&:has(> ol):is([open], :popover-open, :open)::after {
			content: ']';
			margin-left: 1ch;
		}
	}
	ol {
		counter-reset: item -1;

		& > li {
			counter-increment: item;

			&::before {
				content: counter(item) ': ';
				margin-left: 1rem;
			}
		}
	}

	.string {
		color: var(--color-green-600);
		&::before,
		&::after {
			content: '"';
		}
	}

	.number {
		color: var(--color-blue-600);
	}

	.boolean {
		color: var(--color-purple-600);
	}

	.null {
		color: var(--color-red-600);
	}
</style>
