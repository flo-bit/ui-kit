import plainTextEditor from '$lib/docs/text/plain-text-editor';
import richTextEditor from '$lib/docs/text/rich-text-editor';
import advancedTextArea from '$lib/docs/text/advanced-text-area';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const textComponents: ComponentCard[] = [
	plainTextEditor,
	richTextEditor,
	advancedTextArea,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
