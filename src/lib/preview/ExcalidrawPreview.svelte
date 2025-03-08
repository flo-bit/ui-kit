<script>
	import Excalidraw from '$lib/components/extra/excalidraw/Excalidraw.svelte';
	import Heading from '$lib/components/base/heading/Heading.svelte';

	import svg from '$lib/assets/demo.svg?raw';
</script>

<Heading class="mb-4">Excalidraw</Heading>

<Excalidraw {svg} alt="Excalidraw Demo" caption="This is a demo of the Excalidraw component." />
