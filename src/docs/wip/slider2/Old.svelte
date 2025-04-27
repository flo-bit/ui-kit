<script lang="ts">
	import { createDraggable } from 'animejs';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	let height = $state(10);
	let width = new Spring(48);

	onMount(() => {
		let container = document.querySelector('.container');
		// get height of container

		let draggable = createDraggable('.draggable', {
			onGrab: () => {
				console.log('grabbed');
			},
			onRelease: () => {
				console.log('released');

				// reset container width
				width.target = 48;
			},
			onUpdate: (event) => {
				//console.log(event);
				height = (1 - draggable.progressY) * draggable.$container.clientHeight;

				console.log(event);
				// check if is overshooting
				if (
					event.coords[1] < 0 ||
					(event.coords[1] > draggable.$container.clientHeight && event.grabbed && !event.released)
				) {
					const overshoot =
						event.coords[1] < 0
							? -event.coords[1]
							: event.coords[1] - draggable.$container.clientHeight;

					// overshoot
					console.log('overshoot', overshoot / draggable.$container.clientHeight);
					let percent = Math.min(overshoot / draggable.$container.clientHeight, 1);

					width.target = 48 - percent * 24;
				}
			},
			x: false,
			container: '.container',
			trigger: '.container'
		});

		console.log(draggable);
	});
</script>

<div class="flex h-52 w-12 items-center justify-center">
	<div
		class="bg-accent-900 relative container h-52 w-12 overflow-hidden rounded-2xl"
		style="width: {width.current}px;"
	>
		<div class="draggable h-1 w-full rounded-2xl"></div>

		<div
			class="bg-accent-500 absolute right-0 bottom-0 left-0 w-12"
			style="height: {height}px;"
		></div>
	</div>
</div>
