<script lang="ts">
	import { base } from '$app/paths';

	import { Button } from '$lib/components/button';
	import { ThemeToggle } from '$lib/components/theme-toggle';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Container from '$lib/preview/Container.svelte';

	let { children } = $props();
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
	<ThemeToggle />
</Navbar>

<Container>
	{@render children()}
</Container>

<Sidebar>
	<div class="flex flex-col items-start p-4">
		<Button variant="link" href={base}>Home</Button>
		<Button variant="link" href="{base}/components">All</Button>
		<Button variant="link" href="{base}/components/theme" class="mb-8">Theme</Button>

		<Button variant="link" href="{base}/components/alert">Alerts</Button>
		<Button variant="link" href="{base}/components/avatar">Avatars</Button>
		<Button variant="link" href="{base}/components/badge">Badges</Button>
		<Button variant="link" href="{base}/components/button">Buttons</Button>
		<Button variant="link" href="{base}/components/checkbox">Checkboxes</Button>
		<Button variant="link" href="{base}/components/color-select">Color Select</Button>
		<Button variant="link" href="{base}/components/depth-3d">Depth 3D</Button>
		<Button variant="link" href="{base}/components/excalidraw">Excalidraw</Button>
		<Button variant="link" href="{base}/components/github-corner">Github Corner</Button>
		<Button variant="link" href="{base}/components/heatmap">Heatmap</Button>
		<Button variant="link" href="{base}/components/input">Input</Button>
		<Button variant="link" href="{base}/components/phone">Phone</Button>
		<Button variant="link" href="{base}/components/progress">Progress</Button>
		<Button variant="link" href="{base}/components/quote">Quote</Button>
		<Button variant="link" href="{base}/components/ring-chart">Ring Chart</Button>
		<Button variant="link" href="{base}/components/scroll-area">Scroll Area</Button>
		<Button variant="link" href="{base}/components/select">Select</Button>
		<Button variant="link" href="{base}/components/slider">Slider</Button>
		<Button variant="link" href="{base}/components/sonner">Sonner</Button>
		<Button variant="link" href="{base}/components/star-rating">Star Rating</Button>
		<Button variant="link" href="{base}/components/switch">Switch</Button>
		<Button variant="link" href="{base}/components/textarea">Textarea</Button>
		<Button variant="link" href="{base}/components/tooltip">Tooltip</Button>
		<Button variant="link" href="{base}/components/video-player">Video Player</Button>
	</div>
</Sidebar>
