import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

// why this extra vite config? I couldn't get svelte-package to include the compressed glsl files (or even the raw text) in the output
// and requiring consumers to add the vite-plugin-glsl seems like a chore, so we have an extra build step to replace the shaders.js file
// hey, it works ...

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: 'src/lib/components/color-picker/base/shaders.ts',
			formats: ['es'],
			fileName: 'components/color-picker/base/shaders'
		}
	},
	plugins: [glsl({ minify: true })]
});
