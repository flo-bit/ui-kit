import { dndState } from '../stores/dnd.svelte.js';
import type { DragDropOptions, DragDropState } from '../types';

const DEFAULT_DRAGGING_CLASS = 'dragging';

interface DraggableOptions<T> extends DragDropOptions<T> {
	// Add new option for interactive selectors
	interactive?: string[];

	handle?: string;
}

export function draggable<T>(node: HTMLElement, options: DraggableOptions<T>) {
	const draggingClass = (options.attributes?.draggingClass || DEFAULT_DRAGGING_CLASS).split(' ');
	let initialX: number;
	let initialY: number;

	function isInteractiveElement(target: HTMLElement): boolean {
		if (!options.interactive) return false;

		// Check if the target or its parents match any of the interactive selectors
		return options.interactive.some(
			(selector) => target.matches(selector) || target.closest(selector)
		);
	}

	function handleDragStart(event: DragEvent) {
		if (!node.draggable) return;

		console.log('drag start', event);

		dndState.isDragging = true;
		dndState.draggedItem = options.dragData;
		dndState.sourceContainer = options.container;
		dndState.targetContainer = null;

		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
			event.dataTransfer.setData('text/plain', JSON.stringify(options.dragData));
		}

		node.classList.add(...draggingClass);
		options.callbacks?.onDragStart?.(dndState as DragDropState<T>);

		// **Dispatch the custom event that bubbles up to the container**
		const customEvent = new CustomEvent('dragstart-on-container', { bubbles: true });
		node.dispatchEvent(customEvent);
	}

	function handleDragEnd() {
		node.classList.remove(...draggingClass);
		options.callbacks?.onDragEnd?.(dndState as DragDropState<T>);

		// Reset state
		dndState.isDragging = false;
		dndState.draggedItem = null;
		dndState.sourceContainer = '';
		dndState.targetContainer = null;
	}

	function handlePointerDown(event: PointerEvent) {
		if (!node.draggable) return;

		// If the target is an interactive element, don't start dragging
		if (isInteractiveElement(event.target as HTMLElement)) {
			return;
		}

		// Store initial pointer position
		initialX = event.clientX;
		initialY = event.clientY;

		dndState.isDragging = true;
		dndState.draggedItem = options.dragData;
		dndState.sourceContainer = options.container;
		dndState.targetContainer = null;

		node.setPointerCapture(event.pointerId);
		node.classList.add(...draggingClass);
		options.callbacks?.onDragStart?.(dndState as DragDropState<T>);
	}

	function handlePointerMove(event: PointerEvent) {
		if (!dndState.isDragging) return;

		// Optional: Update visual feedback or position
	}

	function handlePointerUp(event: PointerEvent) {
		if (!dndState.isDragging) return;

		node.releasePointerCapture(event.pointerId);
		node.classList.remove(...draggingClass);
		options.callbacks?.onDragEnd?.(dndState as DragDropState<T>);

		// Reset state
		dndState.isDragging = false;
		dndState.draggedItem = null;
		dndState.sourceContainer = '';
		dndState.targetContainer = null;
	}

	function handlePointerDownOnHandle(event: PointerEvent) {
		node.draggable = !options.disabled;
	}

	function handlePointerUpOnHandle(event: PointerEvent) {
		node.draggable = false;
	}

	// if handles are provided, add event listeners for each handle
	if (options.handle) {
		// handles are selectors, so we need to get the elements
		const handle = node.querySelector(options.handle) as HTMLElement;

		handle.addEventListener('pointerdown', handlePointerDownOnHandle);
		handle.addEventListener('pointerup', handlePointerUpOnHandle);
	}

	node.draggable = !options.disabled && !options.handle;

	node.addEventListener('dragstart', handleDragStart);
	node.addEventListener('dragend', handleDragEnd);
	node.addEventListener('pointerdown', handlePointerDown);
	node.addEventListener('pointermove', handlePointerMove);
	node.addEventListener('pointerup', handlePointerUp);

	return {
		update(newOptions: DraggableOptions<T>) {
			options = newOptions;

			node.draggable = !options.disabled && !options.handle;
		},

		destroy() {
			if (options.handle) {
				const handle = node.querySelector(options.handle) as HTMLElement;
				handle.removeEventListener('pointerdown', handlePointerDownOnHandle);
				handle.removeEventListener('pointerup', handlePointerUpOnHandle);
			}

			node.removeEventListener('dragstart', handleDragStart);
			node.removeEventListener('dragend', handleDragEnd);
			node.removeEventListener('pointerdown', handlePointerDown);
			node.removeEventListener('pointermove', handlePointerMove);
		}
	};
}
