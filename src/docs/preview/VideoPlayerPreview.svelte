<script lang="ts">
	import { Button } from '$lib/components/base/button';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import Text from '$lib/components/base/text/Text.svelte';
	import FullscreenVideoPlayer, {
		videoPlayer
	} from '$lib/components/extra/video-player/FullscreenVideoPlayer.svelte';
	import VideoPlayer from '$lib/components/extra/video-player/VideoPlayer.svelte';
</script>

<Subheading>Video Player</Subheading>

<Text class="mt-4 mb-4">Fullscreen Video Player</Text>
<Button onclick={() => videoPlayer.show('https://www.youtube.com/watch?v=u1ZB_rGFyeU')}
	>Show Video</Button
>

<Text class="mt-8 mb-4">Inline Video Player</Text>

<VideoPlayer id="https://www.youtube.com/watch?v=u1ZB_rGFyeU" />

<FullscreenVideoPlayer />
