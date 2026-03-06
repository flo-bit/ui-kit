import type { APISchema } from '$lib/types/schema';

export default [
	{
		title: 'CardSwiper',
		description: 'A Tinder-style swipeable card stack with touch and keyboard support.',
		props: {
			cardData: {
				type: { type: 'function', definition: '(index: number) => CardData' },
				description: 'A function that returns card data for a given index. CardData: { title?: string; description?: string; image?: string; [key: string]: unknown }.',
				required: true
			},
			card: {
				type: 'Snippet<[CardData]>',
				description: 'A custom snippet for rendering each card. Receives the card data as a parameter. Uses a default card template if not provided.'
			},
			onswipe: {
				type: { type: 'function', definition: "(event: { direction: 'left' | 'right'; data: CardData; index: number; element: HTMLElement }) => void" },
				description: 'Callback invoked when a card is swiped away.'
			},
			swipe: {
				type: { type: 'function', definition: "(direction: 'left' | 'right') => void" },
				description: 'A function to programmatically trigger a swipe. Bind to this to control swiping from outside.',
				bindable: true
			},
			minSwipeDistance: {
				type: 'number',
				description: 'Minimum swipe distance (as a fraction of card width) to trigger a swipe.',
				default: '0.5'
			},
			minSwipeVelocity: {
				type: 'number',
				description: 'Minimum swipe velocity to trigger a swipe.',
				default: '0.5'
			},
			arrowKeys: {
				type: 'boolean',
				description: 'Whether arrow keys trigger swipes.',
				default: 'true'
			},
			thresholdPassed: {
				type: 'number',
				description: 'A reactive value (-1 to 1) indicating how far past the swipe threshold the current card is. Negative for left, positive for right.',
				default: '0',
				bindable: true
			},
			anchor: {
				type: { type: 'union', definition: 'number | null' },
				description: 'The vertical anchor point of rotation during swipe (as a fraction of card height). null disables rotation anchoring.'
			},
			rotate: {
				type: 'boolean',
				description: 'Whether cards rotate during swipe.',
				default: 'true'
			},
			cardCount: {
				type: 'number',
				description: 'The number of cards to render in the stack.',
				default: '5'
			}
		}
	}
] satisfies APISchema[];
