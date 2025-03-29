<script>
	import Api from '$docs/site-components/API.svelte';
</script>

<Api
	props={{
		title: 'Accordion',
		props: {
			children: {
				type: 'Snippet',
				description:
					'The children content to render. Should be a list of AccordionItem components.',
				required: true
			},
			type: {
				type: { type: 'enum', definition: "'single' | 'multiple'" },
				description:
					"If set to 'multiple', the accordion will allow multiple items to be open at the same time. If set to single, the accordion will only allow a single item to be open.",
				required: true
			},
			value: {
				type: { type: 'union', definition: 'string | string[]' },
				description:
					'The value of the accordion item that is currently open. If type is set to "multiple", this will be an array of strings. If type is set to "single", this will be a string.',
				bindable: true
			},
			onValueChange: {
				type: {
					type: 'function',
					definition: '(value: string) => void | (value: string[]) => void'
				},
				description: 'A function that is called when the value of the accordion item changes.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the accordion is disabled.',
				default: 'false'
			},
			ref: {
				type: 'HTMLDivElement',
				description:
					'The underlying DOM element being rendered. You can bind to this to get a reference to the element.',
				bindable: true
			}
		}
	}}
/>

<Api
	props={{
		title: 'AccordionItem',
		props: {
			title: {
				type: 'string',
				description:
					'The title of the accordion item, displayed both when the item is closed or open.',
				required: true
			},
			children: {
				type: 'Snippet',
				description:
					'The children content to render. The content is displayed when the item is open.',
				required: true
			},
			value: {
				type: 'string',
				description:
					'The value of the accordion item. This is used to identify when the item is open or closed. If not provided, a unique ID will be generated for this value.'
			},
			disabled: {
				type: 'boolean',
				description: 'Whether the accordion item is disabled.',
				default: 'false'
			},
			ref: {
				type: 'HTMLDivElement',
				description:
					'The underlying DOM element being rendered. You can bind to this to get a reference to the element.',
				bindable: true
			}
		}
	}}
/>
