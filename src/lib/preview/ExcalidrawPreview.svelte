<script>
	import Excalidraw from '$lib/components/excalidraw/Excalidraw.svelte';
	import Heading from '$lib/components/heading/Heading.svelte';

	import svg from './assets/demo.svg?raw';
</script>

<Heading class="mb-4">Excalidraw</Heading>

<Excalidraw {svg} alt="Excalidraw Demo" caption="This is a demo of the Excalidraw component." />
