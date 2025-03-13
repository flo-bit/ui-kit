import { getFormatter } from './formatter';
import { render } from './render';
import type { Callback, RenderState } from './render';

interface UpdateState extends RenderState {
	update: number;
}

// keep track of each instance
const instances = new Map<Object, UpdateState>();

// we use a single timer for efficiency and to keep updates in sync
let updateInterval: number | NodeJS.Timeout;

// register or update instance
export function register(
	instance: Object,
	date: Date | number,
	locale: string,
	live: boolean,
	callback: Callback
) {
	// get the formatter for the given locale, we do this here so we don't keep having to look it up on each tick
	const formatter = getFormatter(locale);

	// create state to render
	const state = { date, callback, formatter };

	// initial render is immediate, so works for SSR
	const update = render(state, Date.now());

	// if it's to update live, we keep a track and schedule the next update
	if (live) {
		instances.set(instance, { ...state, update });
	} else {
		instances.delete(instance);
	}

	// start the clock ticking if there are any live instances
	if (instances.size) {
		updateInterval =
			updateInterval ||
			setInterval(() => {
				const now = Date.now();
				for (const state of instances.values()) {
					if (state.update <= now) {
						state.update = render(state, now);
					}
				}
			}, 1000);
	}
}

export function unregister(instance: Object) {
	instances.delete(instance);
	if (instances.size === 0) {
		clearInterval(updateInterval);
		updateInterval = 0;
	}
}
