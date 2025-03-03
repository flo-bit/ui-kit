<script lang="ts">
	import { base } from '$app/paths';

	import { Button, buttonVariants } from '$lib/components/button';
	import { ThemeToggle } from '$lib/components/theme-toggle';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Container from '$lib/preview/Container.svelte';

	let { children } = $props();

	import * as Popover from '$lib/components/popover';
	import SelectTheme from '$lib/preview/SelectTheme.svelte';
	import { cn } from '$lib/utils';
	import Github from '$lib/components/social-icons/Github.svelte';

	const components = [
		{ label: 'Alerts', href: 'alert' },
		{ label: 'Avatars', href: 'avatar' },
		{ label: 'Badges', href: 'badge' },
		{ label: 'Box', href: 'box' },
		{ label: 'Buttons', href: 'button' },
		{ label: 'Chat Bubble', href: 'chat-bubble' },
		{ label: 'Checkboxes', href: 'checkbox' },
		{ label: 'Color Select', href: 'color-select' },
		{ label: 'Depth 3D', href: 'depth-3d' },
		{ label: 'Excalidraw', href: 'excalidraw' },
		{ label: 'Github Corner', href: 'github-corner' },
		{ label: 'Gradient', href: 'gradient' },
		{ label: 'Heatmap', href: 'heatmap' },
		{ label: 'Image', href: 'image' },
		{ label: 'Input', href: 'input' },
		{ label: 'Line Graph', href: 'line-graph' },
		{ label: 'Phone', href: 'phone' },
		{ label: 'Progress', href: 'progress' },
		{ label: 'Quote', href: 'quote' },
		{ label: 'Ring Chart', href: 'ring-chart' },
		{ label: 'Scroll Area', href: 'scroll-area' },
		{ label: 'Select', href: 'select' },
		{ label: 'Slider', href: 'slider' },
		{ label: 'Sonner', href: 'sonner' },
		{ label: 'Star Rating', href: 'star-rating' },
		{ label: 'Switch', href: 'switch' },
		{ label: 'Textarea', href: 'textarea' },
		{ label: 'Tooltip', href: 'tooltip' },
		{ label: 'Video Player', href: 'video-player' },
		{ label: 'Modal', href: 'modal' },
		{ label: 'Timer', href: 'timer' },
		{ label: 'Number Input', href: 'number-input' },
		{ label: 'Social Icons', href: 'social-icons' },
		{ label: 'Waveform Audio Player', href: 'waveform-audio-player' },
		{ label: 'Image Card', href: 'image-card' },
		{ label: 'Post', href: 'post' },
		{ label: 'Voxel Art', href: 'voxel-art' }
	];

	// sort components by label
	components.sort((a, b) => a.label.localeCompare(b.label));

	console.log(components.length);
</script>

<Navbar hasSidebar>
	<div>
		<Button variant="link" class="block font-normal lg:hidden" popovertarget="mobile-menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6!"
			>
				<path
					fill-rule="evenodd"
					d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				></path>
			</svg>
		</Button>
	</div>
	<div class="flex items-end gap-4">
		<Popover.Root>
			<Popover.Trigger
				class={cn(
					buttonVariants({ variant: 'link', size: 'default' }),
					'flex cursor-pointer items-center gap-0 -space-x-2'
				)}
			>
				<div
					class=" from-accent-500 to-accent-600 border-accent-700 dark:border-accent-400 z-10 size-6 rounded-full border bg-gradient-to-b"
				></div>

				<div
					class=" from-base-500 to-base-600 border-base-700 dark:border-base-400 size-6 rounded-full border bg-gradient-to-b"
				></div>
			</Popover.Trigger>
			<Popover.Content>
				<SelectTheme showTitle={false} />
			</Popover.Content>
		</Popover.Root>
		<ThemeToggle />

		<Github href="https://github.com/flo-bit/ui-kit" class="py-2 pl-2 pr-4" />
	</div>
</Navbar>

<Container>
	{@render children()}
</Container>

<Sidebar>
	<div class="flex flex-col items-start p-4 mb-8">
		<Button variant="link" href={base}>Home</Button>
		<Button variant="link" href="{base}/components">All</Button>
		<Button variant="link" href="{base}/components/theme" class="mb-8">Theme</Button>

		{#each components as component}
			<Button variant="link" href="{base}/components/{component.href}">{component.label}</Button>
		{/each}
	</div>
</Sidebar>
