<script lang="ts">
	import { Button, Subheading, Paragraph } from '$lib';

	import FullscreenVideoPlayer, {
		videoPlayer
	} from '$lib/components/extra/video-player/FullscreenVideoPlayer.svelte';

	import VideoPlayer from '$lib/components/extra/video-player/VideoPlayer.svelte';
</script>

<Subheading>Video Player</Subheading>

<Paragraph class="mt-4 mb-4">Fullscreen Video Player</Paragraph>
<Button onclick={() => videoPlayer.show('https://www.youtube.com/watch?v=u1ZB_rGFyeU')}
	>Show Video</Button
>

<Paragraph class="mt-8 mb-4">Inline Video Player</Paragraph>

<VideoPlayer id="https://www.youtube.com/watch?v=u1ZB_rGFyeU" />

<FullscreenVideoPlayer />
