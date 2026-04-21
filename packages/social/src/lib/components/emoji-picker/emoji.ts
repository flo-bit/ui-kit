import {
	Apple,
	Dog,
	Flag,
	Hand,
	House,
	Lightbulb,
	Search,
	Smile,
	SquarePi,
	Star,
	Volleyball
} from '@foxui/core/icons';
import type { Component } from 'svelte';

export type EmojiGroup = {
	id: number;
	emoji: string;
	name: string;
	icon: Component;
};

export const allGroups: EmojiGroup[] = [
	{ id: 0, emoji: '😀', name: 'smileys-emotion', icon: Smile },
	{ id: 1, emoji: '👋', name: 'people-body', icon: Hand },
	{ id: 3, emoji: '🐱', name: 'animals-nature', icon: Dog },
	{ id: 4, emoji: '🍎', name: 'food-drink', icon: Apple },
	{ id: 5, emoji: '🏠️', name: 'travel-places', icon: House },
	{ id: 6, emoji: '⚽', name: 'activities', icon: Volleyball },
	{ id: 7, emoji: '📝', name: 'objects', icon: Lightbulb },
	{ id: 8, emoji: '⛔️', name: 'symbols', icon: SquarePi },
	{ id: 9, emoji: '🏁', name: 'flags', icon: Flag }
];

export const SEARCH_GROUP_ID = -1;
export const FAVORITES_GROUP_ID = -2;

export const searchGroup: EmojiGroup = {
	id: SEARCH_GROUP_ID,
	emoji: '🔍',
	name: 'search',
	icon: Search
};

export const favoritesGroup: EmojiGroup = {
	id: FAVORITES_GROUP_ID,
	emoji: '⭐',
	name: 'favorites',
	icon: Star
};

export type { NativeEmoji } from 'emoji-picker-element/shared';
