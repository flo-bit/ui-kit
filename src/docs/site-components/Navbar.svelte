<script lang="ts">
	import { Button } from '$lib/components/base/button';
	import { ThemeToggle } from '$lib/components/base/theme-toggle';
	import Navbar from '$lib/components/base/navbar/Navbar.svelte';

	import Github from '$lib/components/extra/social-icons/Github.svelte';
	import Logo from './Logo.svelte';
	import ThemeSelectDropdown from './ThemeSelectDropdown.svelte';

	let { hasSidebar = false } = $props();
</script>


<Navbar {hasSidebar}>
	<div class="flex items-center gap-2">
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

		<Logo />
	</div>
	<div class="flex items-end gap-4">
		<ThemeSelectDropdown />
		<ThemeToggle />

		<Github href="https://github.com/flo-bit/ui-kit" class="py-2 pl-2 pr-4" />
	</div>
</Navbar>