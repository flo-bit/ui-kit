import { convert, OKHSL, OKHSV, OKLab, OKLCH, sRGB } from '@texel/color';

export type Color = string | RGB | OKlab | OKhsv | OKlch;

export type SetColorFunction = (color: Color) => void;

export interface RGB {
	r: number;
	g: number;
	b: number;
}

export interface OKlab {
	l: number;
	a: number;
	b: number;
}

export interface OKhsv {
	h: number;
	s: number;
	v: number;
}

export interface OKhsl {
	h: number;
	s: number;
	l: number;
}

export interface OKlch {
	l: number;
	c: number;
	h: number;
}

export function okhsv_to_oklch(okhsv: OKhsv): OKlch {
	const [l, c, h] = convert([okhsv.h, okhsv.s, okhsv.v], OKHSV, OKLCH);
	return { l: l, c: c, h: h };
}

export function oklch_to_okhsv(oklch: OKlch): OKhsv {
	const [h, s, v] = convert([oklch.h, oklch.c, oklch.l], OKLCH, OKHSV);
	return { h: h ?? 0, s, v };
}

export function oklab_to_okhsv(oklab: OKlab): OKhsv {
	const [h, s, v] = convert([oklab.l, oklab.a, oklab.b], OKLab, OKHSV);
	return { h: h ?? 0, s, v };
}

export function okhsv_to_rgb(okhsv: OKhsv): RGB {
	const [r, g, b] = convert([okhsv.h, okhsv.s, okhsv.v], OKHSV, sRGB);
	return { r, g, b };
}

export function okhsv_to_oklab(okhsv: OKhsv): OKlab {
	const [l, a, b] = convert([okhsv.h, okhsv.s, okhsv.v], OKHSV, OKLab);
	return { l, a, b };
}

export function rgb_to_okhsv(rgb: RGB): OKhsv {
	const [h, s, v] = convert([rgb.r, rgb.g, rgb.b], sRGB, OKHSV);
	return { h, s, v };
}

export function rgb_to_oklab(rgb: RGB): OKlab {
	const [l, a, b] = convert([rgb.r, rgb.g, rgb.b], sRGB, OKLab);
	return { l, a, b };
}

export function okhsl_to_rgb(okhsl: OKhsl): RGB {
	const [r, g, b] = convert([okhsl.h, okhsl.s, okhsl.l], OKHSL, sRGB);
	return { r, g, b };
}

export function oklab_to_oklch(oklab: OKlab): OKlch {
	const [l, c, h] = convert([oklab.l, oklab.a, oklab.b], OKLab, OKLCH);
	return { l, c, h };
}

export function rgb_to_oklch(rgb: RGB): OKlch {
	const [l, c, h] = convert([rgb.r, rgb.g, rgb.b], sRGB, OKLCH);
	return { l, c, h };
}

export function oklab_to_rgb(oklab: OKlab): RGB {
	const [r, g, b] = convert([oklab.l, oklab.a, oklab.b], OKLab, sRGB);
	return { r, g, b };
}

export function oklch_to_rgb(oklch: OKlch): RGB {
	const [r, g, b] = convert([oklch.l, oklch.c, oklch.h], OKLCH, sRGB);
	return { r, g, b };
}

export function oklch_string_to_oklch(oklch: string): OKlch {
	const converted = oklch.split('oklch(')[1].split(')')[0].split(' ');
	return { l: parseFloat(converted[0]), c: parseFloat(converted[1]), h: parseFloat(converted[2]) };
}

export function rgb_to_hex(rgb: RGB): string {
	const r = Math.round(rgb.r * 255);
	const g = Math.round(rgb.g * 255);
	const b = Math.round(rgb.b * 255);
	return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export function hex_to_rgb(hex: string): RGB {
	if (hex.startsWith('#')) {
		hex = hex.slice(1);
	} else if (hex.startsWith('0x')) {
		hex = hex.slice(2);
	}

	if (hex.length !== 6) {
		console.warn('Invalid hex color', hex);
		return { r: 0, g: 0, b: 0 };
	}

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	const r_ = r / 255;
	const g_ = g / 255;
	const b_ = b / 255;
	return { r: r_, g: g_, b: b_ };
}

export function hex_to_okhsv(hex: string): OKhsv {
	const rgb = hex_to_rgb(hex);
	return rgb_to_okhsv(rgb);
}

export function okhsv_to_hex(okhsv: OKhsv): string {
	const rgb = okhsv_to_rgb(okhsv);
	return rgb_to_hex(rgb);
}
