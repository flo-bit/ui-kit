// adopted from https://github.com/joshnuss/svelte-reactive-timer

type Status = 'running' | 'paused' | 'stopped';
type Options = {
	precision?: number;
};

export class StopwatchState {
	status = $state<Status>('stopped');
	duration = $state<number>(0);
	elapsed = $state<number>(0);
	startAt = $state<Date | null>(null);

	time = $state<Date | null>(null);
	precision: number;
	#interval: number | null = null;

	constructor(options: Options = {}) {
		this.precision = options.precision ?? 1000 / 60;
	}

	get isRunning() {
		return this.status == 'running';
	}

	get isStopped() {
		return this.status == 'stopped';
	}

	get isPaused() {
		return this.status == 'paused';
	}

	start() {
		if (this.isRunning) {
			this.stop();
		}

		this.time = new Date();
		this.startAt = this.time;
		this.status = 'running';
		this.elapsed = 0;
		this.#schedule();
	}

	stop() {
		this.#dispose();
		this.status = 'stopped';
	}

	pause() {
		this.#dispose();
		this.status = 'paused';
	}

	resume() {
		this.time = new Date();
		this.status = 'running';
		this.#schedule();
	}

	reset(duration?: number) {
		if (duration) {
			this.duration = duration;
		}
		this.#dispose();

		this.status = 'stopped';
		this.time = new Date();
		this.startAt = this.time;
		this.elapsed = 0;
	}

	#schedule() {
		this.time = new Date();
		this.#interval = setInterval(() => this.#onInterval(), this.precision);
	}

	#dispose() {
		if (this.#interval) {
			clearInterval(this.#interval);
		}
	}

	#onInterval() {
		const now = new Date();

		this.elapsed += now.getTime() - this.time!.getTime();
		this.time = now;
	}
}
