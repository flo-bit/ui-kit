<script lang="ts">
	// TODO: fix types

	import { onMount, type Snippet } from 'svelte';
	import { DragGesture, type FullGestureState } from '@use-gesture/vanilla';
	import type { CardData, Direction, SwipeEventData } from '.';
	import { Image } from '$lib';

	let {
		card = DefaultCard,
		cardData,
		onswipe,
		swipe = $bindable(),

		minSwipeDistance = 0.5,
		minSwipeVelocity = 0.5,
		arrowKeys = true,
		thresholdPassed = $bindable(0),
		anchor = null,
		rotate = true,
		cardCount = 10
	}: {
		card?: Snippet<[CardData]>;

		cardData: (index: number) => CardData;
		onswipe?: (cardInfo: SwipeEventData) => void;
		swipe?: (direction: Direction) => void;

		minSwipeDistance?: number;
		minSwipeVelocity?: number;
		arrowKeys?: boolean;
		thresholdPassed?: number;
		anchor?: number | null;
		rotate?: boolean;
		cardCount?: number;
	} = $props();

	swipe = (direction: Direction = 'right') => {
		if (thresholdPassed !== 0) return;

		let dir = direction === 'left' ? -1 : 1;

		if (!topCard) throw new Error('No top card found');
		cardSwiped(topCard, [dir, 0.1], [dir, 1]);
	};

	let container: HTMLElement;

	let cardIndex = 0;
	let topCard: HTMLElement | undefined = $state();
	let topCardIndex = 0;

	let currentZ = 100000;

	let cards: HTMLElement[] = $state(new Array(cardCount));
	let cardsData: CardData[] = $state([]);

	onMount(() => {
		for (let i = 0; i < cardCount; i++) {
			cardsData.push(cardData(cardIndex++));
			cards.push();
		}

		let gestures: DragGesture[] = [];

		cards.forEach((el) => {
			if (!el) return;

			el.style.zIndex = currentZ.toString();
			currentZ--;

			let gesture = new DragGesture(el, (state) => {
				ondrag(el, state);
			});

			gestures.push(gesture);
		});

		topCardIndex = 0;
		topCard = cards[topCardIndex];

		container.classList.remove('hidden');

		return () => {
			gestures.forEach((gesture) => gesture.destroy());
		};
	});

	const cardSwiped = (el: HTMLElement, velocity: [number, number], movement: [number, number]) => {
		el.classList.add('transition-transform', 'duration-300');
		let index = cards.indexOf(el);

		let direction: Direction = movement[0] > 0 ? 'right' : 'left';
		let data = cardsData[index];

		onswipe?.({ direction, element: el, data, index: cardIndex - 2 });

		thresholdPassed = movement[0] > 0 ? 1 : -1;

		let moveOutWidth = document.body.clientWidth;

		let endX = Math.max(Math.abs(velocity[0]) * moveOutWidth, moveOutWidth);
		let toX = movement[0] > 0 ? endX : -endX;
		let endY = Math.abs(velocity[1]) * moveOutWidth;
		let toY = movement[1] > 0 ? endY : -endY;

		let rotate = movement[0] * 0.03 * (movement[1] / 80);

		el.style.transform = `translate(${toX}px, ${toY + movement[1]}px) rotate(${rotate}deg)`;

		setTimeout(async () => {
			thresholdPassed = 0;

			cardsData[index] = cardData(cardIndex++);

			// next card
			topCardIndex = (topCardIndex + 1) % cardCount;
			topCard = cards[topCardIndex];

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
</script>

<svelte:body
	onkeydown={(e) => {
		if (!arrowKeys) return;
		if (e.key === 'ArrowLeft') {
			swipe('left');
		} else if (e.key === 'ArrowRight') {
			swipe('right');
		}
	}}
/>

{#snippet DefaultCard({ image, title, description }: CardData)}
	<div
		class="border-base-400 dark:border-base-600 bg-base-50 dark:bg-base-900 relative h-full w-full overflow-hidden rounded-2xl border"
	>
		{#key image}
			{#if image}
				<Image
					containerClasses="absolute inset-0 h-full w-full rounded-2xl"
					src={image}
					alt={title ?? ''}
					loading="eager"
					class="h-full w-full object-cover"
				/>
			{/if}
		{/key}
		<div
			class="from-base-50/80 dark:from-base-950/80 absolute inset-0 rounded-b-xl bg-gradient-to-t via-transparent"
		></div>
		<div class="absolute bottom-0 flex w-full justify-start px-3 py-16 sm:px-12">
			<div class="flex flex-col">
				<h3 class="text-base-900 dark:text-base-50 pb-2 text-3xl font-bold">{title}</h3>
				<p class="text-base-800 dark:text-base-200 text-sm">{description}</p>
			</div>
		</div>
	</div>
{/snippet}

<div class="isolate h-full w-full touch-none select-none">
	<div class="relative z-0 hidden h-full w-full" bind:this={container}>
		{#each cards as _, i}
			<div
				bind:this={cards[i]}
				class="absolute h-full w-full cursor-grab touch-none overflow-hidden ease-in-out select-none"
			>
				{#if cardsData[i]}
					{@render card({
						image: cardsData[i].image,
						title: cardsData[i].title,
						description: cardsData[i].description
					})}
				{/if}
			</div>
		{/each}
	</div>
</div>
