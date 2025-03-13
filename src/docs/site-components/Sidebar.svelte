<script lang="ts">
	import { base } from '$app/paths';
	import { Badge } from '$lib';
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';

	import { Button } from '$lib/components/base/button';
	import Sidebar from '$lib/components/base/sidebar/Sidebar.svelte';
	import Logo from './Logo.svelte';

	const baseComponents = [
		{ label: 'Alerts', href: 'alert' },
		{ label: 'Avatars', href: 'avatar' },
		{ label: 'Badges', href: 'badge' },
		{ label: 'Box', href: 'box' },
		{ label: 'Buttons', href: 'button' },
		{ label: 'Chat Bubble', href: 'chat-bubble' },
		{ label: 'Checkboxes', href: 'checkbox' },
		{ label: 'Image', href: 'image' },
		{ label: 'Input', href: 'input' },
		{ label: 'Scroll Area', href: 'scroll-area' },
		{ label: 'Slider', href: 'slider' },
		{ label: 'Switch', href: 'switch' },
		{ label: 'Textarea', href: 'textarea' },
		{ label: 'Tooltip', href: 'tooltip' },
		{ label: 'Modal', href: 'modal' },
		{ label: 'Number Input', href: 'number-input' },
		{ label: 'Cards', href: 'cards' },
		{ label: 'Accordion', href: 'accordion' },
		{ label: 'Sonner', href: 'sonner' },
		{ label: 'Prose', href: 'prose' },
		{ label: 'Head', href: 'head' }
	];

	baseComponents.sort((a, b) => a.label.localeCompare(b.label));
	console.log('components', baseComponents.length);

	const components = [
		{ label: 'Select', href: 'select' },
		{ label: 'Color Select', href: 'color-select' },
		{ label: 'Depth 3D', href: 'depth-3d' },
		{ label: 'Excalidraw', href: 'excalidraw' },
		{ label: 'Github Corner', href: 'github-corner' },
		{ label: 'Gradient', href: 'gradient' },
		{ label: 'Heatmap', href: 'heatmap' },
		{ label: 'Line Graph', href: 'line-graph' },
		{ label: 'Phone', href: 'phone' },
		{ label: 'Progress', href: 'progress' },
		{ label: 'Quote', href: 'quote' },
		{ label: 'Ring Chart', href: 'ring-chart' },
		{ label: 'Star Rating', href: 'star-rating' },
		{ label: 'Video Player', href: 'video-player' },
		{ label: 'Timer', href: 'timer' },
		{ label: 'Social Icons', href: 'social-icons' },
		{ label: 'Waveform Audio Player', href: 'waveform-audio-player' },
		{ label: 'Post', href: 'post' },
		{ label: 'Voxel Art', href: 'voxel-art' },
		{ label: 'Following Pointer', href: 'following-pointer' },
		{ label: 'Audio Visualizer', href: 'audio-visualizer' },
		{ label: 'Color Picker', href: 'color-picker' }
	];

	// sort components by label
	components.sort((a, b) => a.label.localeCompare(b.label));

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
	<div class="mb-8 flex flex-col items-start p-4">
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
			href="{base}/components/theme"
			class="mb-6 w-full justify-start">Theme</Button
		>

		<Accordion type="single" class="w-full" value="base-components">
			<AccordionItem
				value="base-components"
				class="border-0"
				title="Base Components"
				triggerClasses="text-sm px-3 py-1 font-semibold"
				contentClasses="flex flex-col gap-1 items-start px-1"
			>
				{#each baseComponents as component}
					<Button
						data-sveltekit-keepfocus
						variant="ghost"
						onclick={handleClick}
						href="{base}/components/base/{component.href}"
						class="w-full justify-start">{component.label}</Button
					>
				{/each}
			</AccordionItem>
		</Accordion>
	</div>
</Sidebar>
