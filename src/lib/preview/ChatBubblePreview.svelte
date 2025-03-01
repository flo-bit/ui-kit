<script>
	import Box from '$lib/components/box/Box.svelte';
	import ChatBubble from '$lib/components/chat-bubble/ChatBubble.svelte';
	import Heading from '$lib/components/heading/Heading.svelte';
</script>

<Heading class="mb-4">Chat Bubble</Heading>

<Box class="flex flex-col gap-3">
	<ChatBubble side="right" variant="secondary">
		<p>Hello there</p>
	</ChatBubble>

	<ChatBubble>
		<p>General Kenobi</p>
	</ChatBubble>

	<ChatBubble side="right" variant="secondary">
		<p>This is a really long message that should wrap around the chat bubble and not overflow</p>
	</ChatBubble>
	<ChatBubble>
		<p>This is another really long message that should wrap around the chat bubble and not overflow</p>
	</ChatBubble>
</Box>
