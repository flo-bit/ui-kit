<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/base/button';
	import type { PDFDocumentProxy } from 'pdfjs-dist';
	import * as PDFJS from 'pdfjs-dist';
	import { onMount } from 'svelte';

	PDFJS.GlobalWorkerOptions.workerSrc = new URL(
		'pdfjs-dist/build/pdf.worker.mjs',
		import.meta.url
	).toString();

	let loaded = $state(false);

	let currentPage: number = $state(1);

	let pdf: PDFDocumentProxy | undefined;

	let pageCount: number | undefined;

	async function loadPDF(node: HTMLCanvasElement, data: { url: string }) {
		if (!pdf) {
			const loadingTask = PDFJS.getDocument(data.url);
			pdf = await loadingTask.promise;
			pageCount = pdf.numPages;
			loaded = true;
		}
		const page = await pdf.getPage(currentPage);
		const scale = window.devicePixelRatio;

		const viewport = page.getViewport({ scale });
		const canvas = node;

		const context = canvas.getContext('2d')!;

		canvas.height = viewport.height;
		canvas.width = viewport.width;

		const renderContext = {
			canvasContext: context,

			viewport: viewport
		};

		await page.render(renderContext);
	}

	let canvas: HTMLCanvasElement | undefined = $state();

	onMount(async () => {
		loadPDF(canvas!, { url: base + '/test.pdf' });
	});
</script>

<div class="relative mx-auto max-w-full">
	<canvas bind:this={canvas} class="max-h-[calc(100vh-8rem)] max-w-full dark:invert"></canvas>

	{#if loaded}
		<Button
			onclick={() => {
				currentPage = Math.max(1, currentPage - 1);
				loadPDF(canvas!, { url: base + '/test.pdf' });
			}}
			class="absolute bottom-0 left-0"
			size="iconLg"
			disabled={currentPage === 1}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
					clip-rule="evenodd"
				/>
			</svg>
		</Button>

		<Button
			onclick={() => {
				currentPage = Math.min(pageCount!, currentPage + 1);
				loadPDF(canvas!, { url: base + '/test.pdf' });
			}}
			class="absolute right-0 bottom-0"
			size="iconLg"
			disabled={currentPage === pageCount}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
					clip-rule="evenodd"
				/>
			</svg>
		</Button>
	{/if}
</div>
