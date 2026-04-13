<script lang="ts">
	import { Button, ThemeToggle, Navbar } from '@foxui/all';
	import { Menu } from '@foxui/all/icons';

	import Logo from './Logo.svelte';
	import { Github } from '@foxui/all';
	import { SelectThemePopover } from '@foxui/all';

	let { hasSidebar = false, showLogo = true } = $props();
</script>

<Navbar {hasSidebar}>
	<div class="flex items-center gap-2">
		<Button variant="link" class="block font-normal lg:hidden backdrop-blur-none" popovertarget="mobile-menu">
			<Menu size={24} strokeWidth={2} />
		</Button>

		<Logo class={showLogo ? 'lg:ml-5' : 'lg:hidden'} />
	</div>
	<div class="flex items-end gap-3">
		<SelectThemePopover />
		<ThemeToggle class="backdrop-blur-none" />

		<Github href="https://github.com/flo-bit/ui-kit" class="mr-2 p-2" />
	</div>
</Navbar>
