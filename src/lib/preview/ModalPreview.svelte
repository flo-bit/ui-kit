<script>
	import Button from '$lib/components/base/button/Button.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Modal from '$lib/components/base/modal/Modal.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
	import { toast } from 'svelte-sonner';

	import cute from '$lib/assets/images/cute.jpg?as=run';
	import BlueskyLoginModal, {
		blueskyLoginModalState
	} from '$lib/components/base/modal/BlueskyLoginModal.svelte';
	import ImageContainer from '$lib/components/base/image-container/ImageContainer.svelte';

	let openDefault = $state(false);
	let openCustom = $state(false);
</script>

<Subheading class="mb-4">Modal</Subheading>

<Button onclick={() => (openDefault = true)}>Default Modal</Button>

<Button onclick={() => (openCustom = true)} variant="secondary">Custom Modal</Button>

<Button onclick={() => (blueskyLoginModalState.open = true)} variant="secondary"
	>Bluesky Login Modal</Button
>

<Modal
	bind:open={openDefault}
	title="This is the default modal"
	description="It has a title, description, and two buttons (yes and no)"
	yesButton={{ label: 'Yes', onclick: () => toast('Yes', { description: 'Smart choice' }) }}
	noButton={{ label: 'No', onclick: () => toast('No', { description: 'Why not though?' }) }}
/>

<Modal bind:open={openCustom} closeButton={false}>
	<Subheading>Custom modal</Subheading>

	<Text>You can put anything in here... Like an image:</Text>

	<ImageContainer src={cute} alt="image in modal" useThemeColor />

	<Button onclick={() => (openCustom = false)}>Cool</Button>
</Modal>

<BlueskyLoginModal
	login={async (handle) => {
		await new Promise((resolve, reject) =>
			setTimeout(
				() => reject('This is just for UI testing, login is not actually implemented :/'),
				1000
			)
		);
	}}
/>
