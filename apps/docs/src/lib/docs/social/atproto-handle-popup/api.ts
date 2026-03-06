import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'AtprotoHandlePopup',
		description: 'An autocomplete input for searching and selecting AT Protocol (Bluesky) user handles. Uses bits-ui Command for the combobox behavior.',
		props: {
			value: {
				type: 'string',
				description: 'The current input value.',
				bindable: true
			},
			onselected: {
				type: { type: 'function', definition: '(actor: { handle: string; displayName: string; avatar: string; did: string }) => void' },
				description: 'Callback invoked when a user profile is selected from the results.'
			},
			ref: {
				type: 'HTMLInputElement',
				description: 'Reference to the input element.',
				bindable: true
			}
		}
	}
] satisfies APISchema[];
