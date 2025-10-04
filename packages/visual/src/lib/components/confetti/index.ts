import confetti from 'canvas-confetti';
import { convertCSSToHex } from '@foxui/colors';

function getCSSVar(variable: string) {
	return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

export const launchConfetti = (
	color: string = 'accent',
	brightnesses: (50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950)[] = [
		300, 400, 500, 800
	]
) => {
	const count = 200;
	const defaults = {
		origin: { y: 0.7 }
	};

	const colors: string[] = [];
	for (const b of brightnesses) {
		const c = getCSSVar(`--color-${color}-${b}`);
		if (c) {
			colors.push(convertCSSToHex(c));
		}
	}

	function fire(particleRatio: number, opts?: confetti.Options) {
		confetti({
			...defaults,
			...opts,
			particleCount: Math.floor(count * particleRatio),
			colors
		});
	}

	fire(0.25, {
		spread: 26,
		startVelocity: 55
	});
	fire(0.2, {
		spread: 60
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45
	});
};
