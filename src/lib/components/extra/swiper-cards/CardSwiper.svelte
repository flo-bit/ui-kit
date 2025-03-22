<script lang="ts">
	import { onMount } from 'svelte';
	import { DragGesture, type FullGestureState } from '@use-gesture/vanilla';
	import type { CardData, Direction, SwipeEventData } from '.';
	import Card from './Card.svelte';

	let container: HTMLElement;

	let card1: HTMLElement | undefined = $state();
	let card2: HTMLElement | undefined = $state();
	let card1Data: CardData = $state({});
	let card2Data: CardData = $state({});

	let cardIndex = 0;
	let topCard: HTMLElement | undefined = $state();
	let currentZ = 100000;

	onMount(async () => {
		card1Data = cardData(cardIndex++);
		card2Data = cardData(cardIndex++);

		[card1, card2].forEach((el) => {
			if (!el) return;
			el.style.zIndex = currentZ.toString();
			currentZ--;

			new DragGesture(
				el,
				(state) => {
					ondrag(el, state);
				}
			);
		});

		topCard = card1;
		container.classList.remove('hidden');
	});

	const cardSwiped = (el: HTMLElement, velocity: [number, number], movement: [number, number]) => {
		el.classList.add('transition-transform', 'duration-300');

		let direction: Direction = movement[0] > 0 ? 'right' : 'left';
		let data = el === card1 ? card1Data : card2Data;

		onswipe?.({ direction, element: el, data, index: cardIndex - 2 });

		thresholdPassed = movement[0] > 0 ? 1 : -1;

		let moveOutWidth = document.body.clientWidth;

		let endX = Math.max(Math.abs(velocity[0]) * moveOutWidth, moveOutWidth);
		let toX = movement[0] > 0 ? endX : -endX;
		let endY = Math.abs(velocity[1]) * moveOutWidth;
		let toY = movement[1] > 0 ? endY : -endY;

		let rotate = movement[0] * 0.03 * (movement[1] / 80);

		el.style.transform = `translate(${toX}px, ${toY + movement[1]}px) rotate(${rotate}deg)`;

		setTimeout(() => {
			thresholdPassed = 0;

			// move card back to start position at bottom of stack and update data
			if (el === card1) {
				card1Data = {};
				card1Data = cardData(cardIndex++);
				topCard = card2;
			} else {
				card2Data = {};
				card2Data = cardData(cardIndex++);
				topCard = card1;
			}

			currentZ--;
			el.style.zIndex = currentZ.toString();

			el.classList.remove('transition-transform', 'duration-300');
			el.style.transform = '';
		}, 350);
	};

	const ondrag = (
		el: HTMLElement,
		state: Omit<FullGestureState<'drag'>, 'event'> & {
			event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent;
		}
	) => {
		let elWidth = el.offsetWidth;

		if (state.active) {
			let angle = state.movement[0] * 0.03 * (state.movement[1] / 80);

			// fix movement on a curved path if anchor is set
			if (anchor) {
				let vec = [state.movement[0], state.movement[1] - anchor];
				let len = Math.sqrt(vec[0] ** 2 + vec[1] ** 2);
				vec = [(vec[0] / len) * anchor, (vec[1] / len) * anchor];

				state.movement[0] = vec[0];
				state.movement[1] = vec[1] + anchor;
			}

			el.style.transform = `translate(${state.movement[0]}px, ${state.movement[1]}px)`;

			if (rotate) {
				el.style.transform += ` rotate(${angle}deg)`;
			}

			if (Math.abs(state.movement[0]) / elWidth > minSwipeDistance) {
				thresholdPassed = state.movement[0] > 0 ? 1 : -1;
			} else {
				thresholdPassed = 0;
			}
			return;
		}
		// if dragging is finished
		let keep =
			Math.abs(state.movement[0]) / elWidth < minSwipeDistance &&
			Math.abs(state.velocity[0]) < minSwipeVelocity;

		if (keep) {
			thresholdPassed = 0;
			el.classList.add('transition-transform', 'duration-300');
			el.style.transform = '';
			setTimeout(() => {
				el.classList.remove('transition-transform', 'duration-300');
			}, 300);
		} else {
			cardSwiped(el, state.velocity, state.movement);
		}
	};

	let {
		cardData,
		minSwipeDistance = 0.5,
		minSwipeVelocity = 0.5,
		arrowKeys = true,
		thresholdPassed = $bindable(0),
		anchor = null,
		onswipe,
		swipe = $bindable(),
		rotate = true,
	}: {
		cardData: (index: number) => CardData;
		minSwipeDistance?: number;
		minSwipeVelocity?: number;
		arrowKeys?: boolean;
		thresholdPassed?: number;
		anchor?: number | null;
		onswipe?: (cardInfo: SwipeEventData) => void;
		swipe?: (direction: Direction) => void;
		rotate?: boolean;
	} = $props();

	swipe = (direction: Direction = 'right') => {
		if (thresholdPassed !== 0) return;

		let dir = direction === 'left' ? -1 : 1;

		if (!topCard) throw new Error('No top card found');
		cardSwiped(topCard, [dir, 0.1], [dir, 1]);
	};
</script>

<svelte:body
	on:keydown={(e) => {
		if (!arrowKeys) return;
		if (e.key === 'ArrowLeft') {
			swipe('left');
		} else if (e.key === 'ArrowRight') {
			swipe('right');
		}
	}}
/>

<div class="isolate h-full w-full touch-none select-none">
	<div class="relative z-0 hidden h-full w-full" bind:this={container}>
		<Card bind:ref={card1} {...card1Data} />
		<Card bind:ref={card2} {...card2Data} />
	</div>
</div>
