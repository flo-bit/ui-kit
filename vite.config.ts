import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
	plugins: [sveltekit(), imagetools(), glsl()]
});
