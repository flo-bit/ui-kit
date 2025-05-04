<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement | undefined = $state();

	onMount(() => {
		if (!container) return;
		let colors = ['bg-accent-500', 'bg-accent-300', 'bg-accent-600', 'bg-accent-800'];
		// add lots of little squares at random positions to container
		for (let i = 0; i < 200; i++) {
			const square = document.createElement('div');
			square.classList.add(colors[Math.floor(Math.random() * colors.length)]);
			
			let size = Math.pow(Math.random(), 2) * 6 + 4;
			square.style.width = `${size}px`;
			square.style.height = `${size}px`;
			square.style.position = 'absolute';
			// rotate in 3d
			square.style.transform = `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateZ(${Math.random() * 360}deg)`;
			square.style.left = `${Math.random() * 100}%`;
			square.style.top = `${Math.random() * 100}%`;
			container.appendChild(square);
		}
	});
</script>

<div bind:this={container} class="absolute inset-0 w-full h-full">

</div>