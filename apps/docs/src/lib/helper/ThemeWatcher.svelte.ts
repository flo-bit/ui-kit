export class ThemeWatcher {
	type: 'class' | 'mediaQuery' = 'class';
	darkModeMediaQuery: MediaQueryList | null = null;
	observer: MutationObserver | null = null;

	observers: ((me: ThemeWatcher) => void)[] = [];

	constructor(
		observer: ((me: ThemeWatcher) => void) | null = null,
		type: 'class' | 'mediaQuery' = 'class'
	) {
		this.type = type;

		if (this.type === 'mediaQuery') {
			this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			this.darkModeMediaQuery.addEventListener('change', this.updateTheme);
		} else {
			this.observer = new MutationObserver(() => {
				this.updateTheme();
			});

			this.observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class']
			});
		}

		if (observer) {
			this.subscribe(observer);
		}
	}

	isDarkMode() {
		if (this.type === 'class') {
			return document.documentElement.classList.contains('dark');
		}

		return this.darkModeMediaQuery?.matches ?? false;
	}

	getCSSVar(variable: string) {
		return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
	}

	updateTheme() {
		this.observers.forEach((observer) => observer(this));
	}

	subscribe(observer: (me: ThemeWatcher) => void) {
		this.observers.push(observer);
	}

	unsubscribe(observer: (me: ThemeWatcher) => void) {
		this.observers = this.observers.filter((o) => o !== observer);
	}

	destroy() {
		this.observer?.disconnect();
		this.darkModeMediaQuery?.removeEventListener('change', this.updateTheme);
	}
}
