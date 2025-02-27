<script lang="ts">
	import { Button } from '$lib/components/button';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import FullscreenVideoPlayer, {
		videoPlayer
	} from '$lib/components/video-player/FullscreenVideoPlayer.svelte';
	import VideoPlayer from '$lib/components/video-player/VideoPlayer.svelte';
</script>

<Subheading>Video Player</Subheading>

<Text class="mb-4 mt-4">Fullscreen Video Player</Text>
<Button onclick={() => videoPlayer.show('https://www.youtube.com/watch?v=u1ZB_rGFyeU')}
	>Show Video</Button
>

<Text class="mb-4 mt-8">Inline Video Player</Text>

<VideoPlayer id="https://www.youtube.com/watch?v=u1ZB_rGFyeU" />

<FullscreenVideoPlayer />
