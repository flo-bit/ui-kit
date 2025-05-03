<script lang="ts">
	import { toast } from '@fuxui/base';
	import { BlueskyLogin } from '@fuxui/social';
</script>


<BlueskyLogin login={async (handle: string) => {
	if(!handle) {
		toast.error('Please enter a handle');
		return false;
	}
	await new Promise((resolve) => setTimeout(resolve, 1000));
	toast.success(`Login successful for ${handle}`);
	return true;
}} />