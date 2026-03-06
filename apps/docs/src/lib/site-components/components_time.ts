import timer from '$lib/docs/time/timer';
import stopwatch from '$lib/docs/time/stopwatch';
import relativeTime from '$lib/docs/time/relative-time';
import { toComponentCard, type ComponentCard } from '$lib/types/schema';

export const timeComponents: ComponentCard[] = [
	timer,
	stopwatch,
	relativeTime,
].map(toComponentCard).sort((a, b) => a.label.localeCompare(b.label));
