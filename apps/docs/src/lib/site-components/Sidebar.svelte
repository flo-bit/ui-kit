<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { Accordion, AccordionItem, Button, Sidebar } from '@fuxui/base';

	import { components } from './components_all';

	import Logo from './Logo.svelte';

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
			data-current={page.url.pathname === `${base}/docs/quick-start`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/quick-start"
			class="mb-1 w-full justify-start backdrop-blur-none">Quick Start</Button
		>
		<Button
			data-current={page.url.pathname === `${base}/docs/philosophy`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/philosophy"
			class="mb-1 w-full justify-start backdrop-blur-none">Philosophy</Button
		>
		<Button
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href="{base}/docs/theme"
			class="mb-6 w-full justify-start backdrop-blur-none">Theme</Button
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
							data-current={page.url.pathname === `${base}/components/${category.href}/${component.href}`}
							data-sveltekit-keepfocus
							variant="ghost"
							onclick={handleClick}
							href="{base}/components/{category.href}/{component.href}"
							class="w-full justify-start backdrop-blur-none">{component.label}</Button
						>
					{/each}
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</Sidebar>
