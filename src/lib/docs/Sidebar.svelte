<script lang="ts">
	import { base } from '$app/paths';
	import { Accordion, AccordionItem } from '$lib/components/base/accordion';

	import { Button } from '$lib/components/base/button';
	import Sidebar from '$lib/components/base/sidebar/Sidebar.svelte';

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
		{ label: 'Sonner', href: 'sonner' }
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
</script>

<Sidebar {mobileOnly}>
	<div class="mb-8 flex flex-col items-start p-4">
		<Button variant="link" href={base}>Home</Button>
		<Button variant="link" href="{base}/components">All</Button>
		<Button variant="link" href="{base}/components/theme" class="mb-8">Theme</Button>

		<script lang="ts">
			import { Accordion, AccordionItem } from '$lib/components/base/accordion';
			import Subheading from '$lib/components/base/heading/Subheading.svelte';
		</script>

		<Accordion type="single" class="w-full" value="base-components">
			<AccordionItem value="base-components" title="Base Components" triggerClasses="text-sm px-3 font-semibold" contentClasses="flex flex-col gap-1 items-start px-2">
				{#each baseComponents as component}
					<Button variant="ghost" href="{base}/components/{component.href}" class="w-full justify-start">{component.label}</Button
					>
				{/each}
			</AccordionItem>
		</Accordion>
	</div>
</Sidebar>
