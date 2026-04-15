import { convertCSSToHex } from '@foxui/colors';

/** Convert #rrggbb / #rgb to [r,g,b] floats in 0..1. */
function hexToRgb(hex: string): [number, number, number] | null {
	let h = hex.trim().toLowerCase();
	if (h.startsWith('#')) h = h.slice(1);
	if (h.length === 3) h = h.split('').map((c) => c + c).join('');
	if (!/^[0-9a-f]{6}$/.test(h)) return null;
	const n = parseInt(h, 16);
	return [((n >> 16) & 0xff) / 255, ((n >> 8) & 0xff) / 255, (n & 0xff) / 255];
}

/** Resolve any CSS color string (hex / rgb / var(--...)) to [r,g,b] floats, reading computed styles. */
export function resolveColorFloats(value: string): [number, number, number] | null {
	return resolveColor(value);
}

function resolveColor(value: string): [number, number, number] | null {
	const el = document.documentElement;
	if (value.startsWith('var(')) {
		const varName = value.slice(4, -1).split(',')[0].trim();
		const raw = getComputedStyle(el).getPropertyValue(varName).trim();
		if (!raw) return null;
		return resolveColor(raw);
	}
	try {
		return hexToRgb(convertCSSToHex(value));
	} catch {
		return hexToRgb(value);
	}
}

function sameRgb(a: number[], b: [number, number, number]): boolean {
	if (a.length < 3) return false;
	const tol = 2 / 255;
	return (
		Math.abs(a[0] - b[0]) < tol && Math.abs(a[1] - b[1]) < tol && Math.abs(a[2] - b[2]) < tol
	);
}

/**
 * Deep-clone the animation data and replace any color keyed by `c.k = [r,g,b,a]`
 * matching one of the source colors with its mapped target color.
 */
export function recolorLottie(
	data: unknown,
	colorMap: Record<string, string>
): unknown {
	const pairs: { from: [number, number, number]; to: [number, number, number] }[] = [];
	for (const [from, to] of Object.entries(colorMap)) {
		const f = resolveColor(from);
		const t = resolveColor(to);
		if (f && t) pairs.push({ from: f, to: t });
	}
	if (pairs.length === 0) return data;

	const clone = structuredClone(data);
	walk(clone);
	return clone;

	function walk(node: unknown) {
		if (!node || typeof node !== 'object') return;
		if (Array.isArray(node)) {
			for (const child of node) walk(child);
			return;
		}
		const obj = node as Record<string, unknown>;
		const c = obj.c as { a?: number; k?: unknown } | undefined;
		if (c && typeof c === 'object' && c.a === 0 && Array.isArray(c.k)) {
			const k = c.k as number[];
			if (k.length >= 3 && k.every((n) => typeof n === 'number' && n >= 0 && n <= 1)) {
				for (const { from, to } of pairs) {
					if (sameRgb(k, from)) {
						k[0] = to[0];
						k[1] = to[1];
						k[2] = to[2];
						break;
					}
				}
			}
		}
		for (const key in obj) walk(obj[key]);
	}
}
