<script>
	import Button from '$lib/components/base/button/Button.svelte';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Modal from '$lib/components/base/modal/Modal.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
	import { toast } from 'svelte-sonner';

	import cute from '$docs/assets/images/cute.jpg?as=run';
	import BlueskyLoginModal, {
		blueskyLoginModalState
	} from '$lib/components/base/modal/BlueskyLoginModal.svelte';
	import ImageContainer from '$lib/components/base/image-container/ImageContainer.svelte';

	let openDefault = $state(false);
	let openCustom = $state(false);
</script>

# Modal

## Examples

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
	<Subheading>Custom modal</Subheading>

    <Text>You can put anything in here... Like an image:</Text>

    <ImageContainer src={cute} alt="image in modal" useThemeColor containerClasses="max-w-64 mx-auto" />

    <Button onclick={() => (openCustom = false)}>Cool</Button>

</Modal>

## Usage

```svelte
<script>
	import { Modal, Button } from 'fuchs';

	let open = $state(false);

	function yesClicked() {
		console.log('yes');
	}

	function noClicked() {
		console.log('no');
	}
</script>

<Modal bind:open title="This is the default modal" />

<Button
	onclick={() => (open = true)}
	yesButton={{ onclick: yesClicked }}
	noButton={{ onclick: noClicked }}
>
	Open modal
</Button>
```
