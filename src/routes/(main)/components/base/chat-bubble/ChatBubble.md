<script>
	import Box from '$lib/components/base/box/Box.svelte';
	import ChatBubble from '$lib/components/base/chat-bubble/ChatBubble.svelte';
	import Heading from '$lib/components/base/heading/Heading.svelte';

	import ImageContainer from '$lib/components/base/image-container/ImageContainer.svelte';

	import cute from '$docs/assets/images/cute.jpg?as=run';
</script>

# Chat Bubble

## Example

<Box class="flex flex-col gap-3 not-prose">
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
    	<p>
    		This is another really long message that should wrap around the chat bubble and not overflow
    	</p>
    </ChatBubble>

    <ChatBubble side="right" variant="secondary">
    	<p>This is me sending you an image</p>

    	<ImageContainer src={cute} alt="cute cat" containerClasses="-mx-1.5 rounded-xl" />
    </ChatBubble>

</Box>

## Usage

```svelte
<script>
	import { ChatBubble } from 'fuchs';
</script>

<ChatBubble side="right" variant="secondary">
	<p>Hello there</p>
</ChatBubble>

<ChatBubble>
	<p>General Kenobi</p>
</ChatBubble>
```
