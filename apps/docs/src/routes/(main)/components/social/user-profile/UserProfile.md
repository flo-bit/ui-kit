<script lang="ts">
	import UserProfileExample from './Example.svelte';
</script>

# User Profile

## Example

<UserProfileExample />

## Usage

```svelte
<script lang="ts">
	import { UserProfile } from '@foxui/social';
</script>

<UserProfile
	profile={{
		handle: '@flo-bit',
		displayName: 'Florian',
		avatar: 'https://github.com/flo-bit.png',
		banner: 'https://cdn.bsky.app/img/banner/plain/did:plc:257wekqxg4hyapkq6k47igmp/bafkreidekzsdfuwjphnfbyobzfniy4mijpfwshtagdqp2jibea7ojwoc2e@jpeg'
	}}
/>
```
