<script>
	import { Box, ChatBubble, ImageContainer } from '$lib';

	import cute from '$docs/assets/images/cute.jpg?as=run';
</script>

<Box class="not-prose flex flex-col gap-3">
	<ChatBubble side="right">
		<p>Hello there</p>
	</ChatBubble>

	<ChatBubble>
		<p>General Kenobi</p>
	</ChatBubble>

	<ChatBubble side="right">
		<p>This is a really long message that should wrap around the chat bubble and not overflow</p>
	</ChatBubble>
	<ChatBubble>
		<p>
			This is another really long message that should wrap around the chat bubble and not overflow
		</p>
	</ChatBubble>

	<ChatBubble side="right">
		<p>This is me sending you an image</p>

		<ImageContainer src={cute} alt="cute cat" containerClasses="-mx-1.5 rounded-xl" />
	</ChatBubble>
</Box>
