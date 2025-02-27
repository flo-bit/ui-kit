import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

import colors from 'tailwindcss/colors';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	darkMode: 'class',

	plugins: [
		typography,
		forms,
		tailwindcssAnimate,
		createThemes(
			{
				red: {
					accent: colors.red
				},
				orange: {
					accent: colors.orange
				},
				amber: {
					accent: colors.amber
				},
				yellow: {
					accent: colors.yellow
				},
				lime: {
					accent: colors.lime
				},
				green: {
					accent: colors.green
				},
				emerald: {
					accent: colors.emerald
				},
				teal: {
					accent: colors.teal
				},
				cyan: {
					accent: colors.cyan
				},
				sky: {
					accent: colors.sky
				},
				blue: {
					accent: colors.blue
				},
				indigo: {
					accent: colors.indigo
				},
				violet: {
					accent: colors.violet
				},
				purple: {
					accent: colors.purple
				},
				fuchsia: {
					accent: colors.fuchsia
				},
				pink: {
					accent: colors.pink
				},
				rose: {
					accent: colors.rose
				},
				slate: {
					base: colors.slate
				},
				gray: {
					base: colors.gray
				},
				zinc: {
					base: colors.zinc
				},
				neutral: {
					base: colors.neutral
				},
				stone: {
					base: colors.stone
				}
			},
			{
				produceCssVariable: (colorName) => {
					return `--${colorName}`;
				}
			}
		)
	]
} satisfies Config;
