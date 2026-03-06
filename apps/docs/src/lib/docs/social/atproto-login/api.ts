import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'AtprotoLoginModal',
		description: 'A modal dialog for AT Protocol (Bluesky) login with handle autocomplete. Export atProtoLoginModalState to control the modal.',
		props: {
			login: {
				type: { type: 'function', definition: '(handle: string) => Promise<boolean | undefined>' },
				description: 'Callback to handle the login action. Should return true on success.'
			},
			signup: {
				type: { type: 'function', definition: '() => Promise<boolean | undefined>' },
				description: 'Callback to handle the signup action.'
			},
			formAction: {
				type: 'string',
				description: 'The form action URL for server-side form submission.'
			},
			formMethod: {
				type: { type: 'enum', definition: "'dialog' | 'get' | 'post'" },
				description: 'The form submission method.',
				default: "'get'"
			},
			loginOnSelect: {
				type: 'boolean',
				description: 'Whether to automatically trigger login when a handle is selected from autocomplete.',
				default: 'true'
			}
		}
	}
] satisfies APISchema[];
