import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	darkMode: 'class',

	plugins: [typography, forms, tailwindcssAnimate]
} satisfies Config;
