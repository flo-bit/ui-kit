<script lang="ts">
	import { AtprotoLoginModal, atProtoLoginModalState, Button, toast } from '@foxui/all';
</script>



<Button onclick={() => atProtoLoginModalState.show()}>
	Login
</Button>

<AtprotoLoginModal login={async (handle: string) => {
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
	}} signup={async () => {
		toast.success('Signup successful');
		atProtoLoginModalState.hide();
		return true;
	}} />
