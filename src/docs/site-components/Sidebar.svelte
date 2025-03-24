<script lang="ts">
	import { base } from '$app/paths';
	import { Badge } from '$lib';
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';

	import { Button } from '$lib/components/base/button';
	import Sidebar from '$lib/components/base/sidebar/Sidebar.svelte';
	import { components } from './components_all';
	import { baseComponents } from './components_base';
	import { extraComponents } from './components_extra';

	import Logo from './Logo.svelte';

	// const components = [
	// 	{ label: 'Select', href: 'select' },
	// 	{ label: 'Color Select', href: 'color-select' },
	// 	{ label: 'Depth 3D', href: 'depth-3d' },
	// 	{ label: 'Excalidraw', href: 'excalidraw' },
	// 	{ label: 'Github Corner', href: 'github-corner' },
	// 	{ label: 'Gradient', href: 'gradient' },
	// 	{ label: 'Heatmap', href: 'heatmap' },
	// 	{ label: 'Line Graph', href: 'line-graph' },
	// 	{ label: 'Phone', href: 'phone' },
	// 	{ label: 'Progress', href: 'progress' },
	// 	{ label: 'Quote', href: 'quote' },
	// 	{ label: 'Ring Chart', href: 'ring-chart' },
	// 	{ label: 'Star Rating', href: 'star-rating' },
	// 	{ label: 'Video Player', href: 'video-player' },
	// 	{ label: 'Timer', href: 'timer' },
	// 	{ label: 'Social Icons', href: 'social-icons' },
	// 	{ label: 'Waveform Audio Player', href: 'waveform-audio-player' },
	// 	{ label: 'Post', href: 'post' },
	// 	{ label: 'Voxel Art', href: 'voxel-art' },
	// 	{ label: 'Following Pointer', href: 'following-pointer' },
	// 	{ label: 'Audio Visualizer', href: 'audio-visualizer' },
	// 	{ label: 'Color Picker', href: 'color-picker' }
	// ];

	let { mobileOnly = false } = $props();

	const handleClick = (e: MouseEvent) => {
		// close the mobile menu
		const popover = document.getElementById('mobile-menu');
		if (popover) {
			popover.hidePopover();
		}
	};
</script>

<Sidebar {mobileOnly}>
	<div class="mb-24 flex flex-col items-start p-4">
		<Logo class="mb-8 px-3 py-1" />

		<Button
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/quick-start"
			class="mb-1 w-full justify-start">Quick Start</Button
		>
		<Button
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/philosophy"
			class="mb-1 w-full justify-start">Philosophy</Button
		>
		<Button
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/theme"
			class="mb-6 w-full justify-start">Theme</Button
		>

		<Accordion type="multiple" class="w-full" value={components.map((c) => c.href)}>
			{#each components as category}
				<AccordionItem
					value={category.href}
					class="border-0"
					title={category.name}
					triggerClasses="text-sm px-3 py-1 font-semibold"
					contentClasses="flex flex-col gap-1 items-start px-1"
				>
					{#each category.components as component}
						<Button
							data-sveltekit-keepfocus
							variant="ghost"
							onclick={handleClick}
							href="{base}/components/{category.href}/{component.href}"
							class="w-full justify-start">{component.label}</Button
						>
					{/each}
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</Sidebar>
