<script>
	import { base } from '$app/paths';
	import Subheading from '$lib/components/heading/Subheading.svelte';
	import WaveformAudioPlayer from '$lib/components/waveform-audio-player/WaveformAudioPlayer.svelte';
</script>

<Subheading class="mb-4">Waveform Audio Player</Subheading>

<WaveformAudioPlayer url={base + '/audio/music.mp3'} />
