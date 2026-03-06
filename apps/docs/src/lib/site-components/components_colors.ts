import colorPicker from '$lib/docs/colors/color-picker';
import colorSelect from '$lib/docs/colors/color-select';
import colorGradientPicker from '$lib/docs/colors/color-gradient-picker';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const colorsComponents: ComponentCard[] = [
	colorPicker,
	colorSelect,
	colorGradientPicker,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
