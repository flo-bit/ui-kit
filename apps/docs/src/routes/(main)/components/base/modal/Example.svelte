<script lang="ts">
	import { Button, Modal, toast, ImageContainer, Subheading } from '@fuxui/base';

	import cute from '$lib/assets/images/cute.jpg';

	let openDefault = $state(false);
	let openCustom = $state(false);
</script>

<Button onclick={() => (openDefault = true)}>Default Modal</Button>

<Button onclick={() => (openCustom = true)} variant="secondary">Custom Modal</Button>

<Modal
	bind:open={openDefault}
	title="This is the default modal"
	description="It has a title, description, and two buttons (yes and no)"
	yesButton={{ onclick: () => toast('Yes', { description: 'Smart choice' }) }}
	noButton={{ onclick: () => toast('No', { description: 'Why not though?' }) }}
/>

<Modal bind:open={openCustom} closeButton={false}>
	<Subheading>
		You can put anything in here... Like an image:
	</Subheading>

	<ImageContainer
		src={cute}
		alt="image in modal"
		useThemeColor
		containerClasses="max-w-64 mx-auto"
	/>

	<Button onclick={() => (openCustom = false)}>Cool</Button>
</Modal>
