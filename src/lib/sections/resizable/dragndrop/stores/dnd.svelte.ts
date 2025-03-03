import type { DragDropState } from '../types/index.js';

// Global DnD state using Svelte 5's state rune
export const dndState = $state<DragDropState>({
	isDragging: false,
	draggedItem: null,
	sourceContainer: '',
	targetContainer: null,
	targetElement: null,
	invalidDrop: false
});
