<script>
	import Box from '$lib/components/box/Box.svelte';
	import ChatBubble from '$lib/components/chat-bubble/ChatBubble.svelte';
	import Heading from '$lib/components/heading/Heading.svelte';
</script>

<Heading class="mb-4">Chat Bubble</Heading>

<Box class="flex flex-col gap-2">
	<ChatBubble side="right" variant="secondary">
		<p>Hello there</p>
	</ChatBubble>

	<ChatBubble>
		<p>General Kenobi</p>
	</ChatBubble>
</Box>
