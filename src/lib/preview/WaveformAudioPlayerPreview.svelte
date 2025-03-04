<script>
	import { base } from '$app/paths';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import WaveformAudioPlayer from '$lib/components/audio/waveform-audio-player/WaveformAudioPlayer.svelte';
</script>

<Subheading class="mb-4">Waveform Audio Player</Subheading>

<WaveformAudioPlayer url={base + '/audio/music.mp3'} />
