// adopted from https://github.com/joshnuss/svelte-reactive-timer

type Status = 'running' | 'paused' | 'stopped';
type Options = {
	precision?: number;
};

export class TimerState {
	status = $state<Status>('stopped');
	duration = $state<number>(0);
	elapsed = $state<number>(0);
	remaining = $derived(this.duration - this.elapsed);
	startAt = $state<Date | null>(null);
	endAt = $state<Date | null>(null);
	time = $state<Date | null>(null);
	precision: number;
	#interval: number | null = null;

	constructor(duration: number, options: Options = {}) {
		this.duration = duration;
		this.precision = options.precision ?? 300;
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
		this.endAt = new Date(this.time.getTime() + this.duration);
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
		this.endAt = new Date(this.time.getTime() + this.remaining);
		this.status = 'running';
		this.#schedule();
	}

	reset(duration?: number) {
		if (duration) {
			this.duration = duration;
		}
		this.#dispose();

		if (!this.isStopped) {
			this.start();
		} else {
			this.time = new Date();
			this.startAt = this.time;
			this.endAt = new Date(this.time.getTime() + this.duration);
			this.elapsed = 0;
		}
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

		if (this.time >= this.endAt!) {
			this.elapsed = this.duration;
			this.stop();
		}
	}
}
