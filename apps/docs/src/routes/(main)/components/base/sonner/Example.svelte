<script lang="ts">
	import { Button, toast } from '@fuxui/base';
</script>

<div class="not-prose flex flex-wrap gap-4">
	<Button
		onclick={() =>
			toast('Hello there', {
				description: 'General Kenobi!'
			})}>Default</Button
	>

	<Button
		variant="green"
		onclick={() =>
			toast.success('Success!', {
				description: "You are strong and wise and I'm very proud of you!"
			})}>Success</Button
	>
	<Button
		variant="red"
		onclick={() =>
			toast.error('Error!', {
				description: 'These are not the droids you are looking for.'
			})}>Error</Button
	>
	<Button
		variant="blue"
		onclick={() =>
			toast.info('Info!', {
				description: 'I heard spinning is a good trick.'
			})}>Info</Button
	>
</div>
