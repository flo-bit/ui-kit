import excalidraw from '$lib/docs/visual/excalidraw';
import phone from '$lib/docs/visual/phone';
import quote from '$lib/docs/visual/quote';
import undraw from '$lib/docs/visual/undraw';
import imageMasonry from '$lib/docs/visual/image-masonry';
import confetti from '$lib/docs/visual/confetti';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const visualComponents: ComponentCard[] = [
	excalidraw,
	phone,
	quote,
	undraw,
	imageMasonry,
	confetti,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
