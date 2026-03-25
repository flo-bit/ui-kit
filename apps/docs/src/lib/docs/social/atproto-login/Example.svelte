<script lang="ts">
	import { AtprotoLogin, AtprotoLoginModal, Button, toast, Box } from '@foxui/all';

	let open = $state(false);

	async function login(handle: string) {
		if (!handle) {
			toast.error('Please enter a handle');
			return false;
		}
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (Math.random() < 0.2) {
			throw Error('Something went wrong (this is what an error looks like)');
		}
		toast.success(`Login successful for ${handle}`);
		return true;
	}

	async function signup() {
		toast.success('Signup successful');
		open = false;
		return true;
	}
</script>

<div class="flex flex-col">
	<div>
		<h3>Modal version</h3>
		<Button onclick={() => (open = true)}>Open login modal</Button>
	</div>
	<div class="pt-4">
		<h3>Inline version</h3>
		<Box class="not-prose max-w-sm">
			<AtprotoLogin {login} {signup} />
		</Box>
	</div>
</div>

<AtprotoLoginModal bind:open {login} {signup} />
