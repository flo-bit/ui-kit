<script lang="ts">
	import { Button } from '$lib/components/base/button';
	import {
		AudioAnalysis,
		normalizeArray,
		MicrophoneVisualizer,
		SpeakerVisualizer,
		BarVisualizer
	} from '$lib/components/audio/audio-visualizations';
	import Subheading from '$lib/components/base/heading/Subheading.svelte';
	import { onMount } from 'svelte';
	import { ThemeWatcher } from '$lib/helper/ThemeWatcher.svelte';

	let audioContext: AudioContext | undefined = undefined;
	let analyser: AnalyserNode | undefined = undefined;
	let microphone: MediaStreamAudioSourceNode | undefined = undefined;

	let interval: number | undefined = undefined;

	let values: Float32Array = $state(new Float32Array([0, 0, 0, 0]));

	let isPlaying = $state(false);

	onMount(() => {
		const theme = new ThemeWatcher();

		theme.subscribe(() => {
			values = new Float32Array(values);
		});
	});

	async function startTracking(): Promise<void> {
		isPlaying = true;

		audioContext = new AudioContext({ sampleRate: 48000 });
		analyser = audioContext.createAnalyser();

		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		microphone = audioContext.createMediaStreamSource(stream);

		microphone.connect(analyser);
		analyser.fftSize = 1024;
		analyser.smoothingTimeConstant = 0.2;

		interval = setInterval(trackAudio, 1000 / 60);
	}

	function stopTracking(): void {
		isPlaying = false;

		values = new Float32Array([0, 0, 0, 0]);

		if (interval) {
			clearInterval(interval);
			interval = undefined;
		}

		if (microphone) {
			microphone.disconnect();
			microphone = undefined;
		}

		if (analyser) {
			analyser.disconnect();
			analyser = undefined;
		}
		
	}

	function trackAudio(): void {
		if (!analyser) return;

		const output = AudioAnalysis.getFrequencies(analyser, 48000, undefined, 'voice');

		values = output.values;
	}
</script>

<Subheading class="mb-8">Audio Visualizers</Subheading>

<Button onclick={() => (isPlaying ? stopTracking() : startTracking())}>
	{isPlaying ? 'Stop microphone' : 'Start microphone'}
</Button>
<div class="mt-8 flex justify-between w-full gap-12">
	<BarVisualizer values={normalizeArray(values, 8)} class="size-12" />

	<MicrophoneVisualizer value={normalizeArray(values, 1)[0] * 2} class="size-12" />

	<SpeakerVisualizer value={normalizeArray(values, 1)[0] * 2} class="size-12" />
</div>
