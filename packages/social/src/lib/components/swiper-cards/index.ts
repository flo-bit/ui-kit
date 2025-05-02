export type CardData = {
	title?: string;
	description?: string;
	image?: string;
	// anything else
	[key: string]: unknown;
};

export type SwipeEventData = {
	direction: Direction;
	data: CardData;
	index: number;
	element: HTMLElement;
};

export type Direction = 'left' | 'right';

export { default as CardSwiper } from './CardSwiper.svelte';
