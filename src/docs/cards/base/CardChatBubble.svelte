<script>
	import ChatBubble from '$lib/components/base/chat-bubble/ChatBubble.svelte';
</script>

<div class="w-full flex flex-col gap-4">
	<ChatBubble side="right" variant="secondary">
		<p>Hello there</p>
	</ChatBubble>

	<ChatBubble>
		<p>General Kenobi</p>
	</ChatBubble>
</div>
