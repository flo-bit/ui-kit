<script lang="ts">
	import '../app.css';
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
				class="!size-6"
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
	<div class="flex flex-col items-start gap-1 p-4">
		<Button variant="link" href="{base}/">All</Button>

		<Button variant="link" href="{base}/theme" class="mb-8">Theme</Button>

		<Button variant="link" href="{base}/alert">Alerts</Button>
		<Button variant="link" href="{base}/avatar">Avatars</Button>
		<Button variant="link" href="{base}/badge">Badges</Button>
		<Button variant="link" href="{base}/button">Buttons</Button>
		<Button variant="link" href="{base}/checkbox">Checkboxes</Button>
		<Button variant="link" href="{base}/color-select">Color Select</Button>
		<Button variant="link" href="{base}/depth-3d">Depth 3D</Button>
		<Button variant="link" href="{base}/excalidraw">Excalidraw</Button>
		<Button variant="link" href="{base}/github-corner">Github Corner</Button>
		<Button variant="link" href="{base}/heatmap">Heatmap</Button>
		<Button variant="link" href="{base}/input">Input</Button>
		<Button variant="link" href="{base}/phone">Phone</Button>
		<Button variant="link" href="{base}/piechart">Pie Chart</Button>
		<Button variant="link" href="{base}/progress">Progress</Button>
		<Button variant="link" href="{base}/star-rating">Star Rating</Button>
		<Button variant="link" href="{base}/textarea">Textarea</Button>
		<Button variant="link" href="{base}/tooltip">Tooltip</Button>
		<Button variant="link" href="{base}/video-player">Video Player</Button>
	</div>
</Sidebar>
