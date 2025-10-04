<script lang="ts">
	import Example from './Example.svelte';
</script>

# Bluesky Login

## Example

<Example />

## Usage

### Client side login

```svelte
<script lang="ts">
	import { BlueskyLogin } from '@foxui/social';
</script>

<BlueskyLogin login={async (handle) => {
	// do login and return true if login 
	// is successful and should hide the modal
}} />
```

### Use with forms

Pass in `formAction` and `formMethod` to use the BlueskyLogin component as a form submit handler.

```svelte
<BlueskyLogin formAction="/login" formMethod="post" />
```

And then use like a normal form in your `+page.server.ts` or `+layout.server.ts` file:

```ts
export const actions: Actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		let handle = formData.get('handle') as string;

		// authorization logic here
	},
}
```