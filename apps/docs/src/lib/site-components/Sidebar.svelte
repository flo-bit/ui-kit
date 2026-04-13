<script lang="ts">
	import { page } from '$app/state';
	import { base, resolve } from '$app/paths';
	import { Accordion, AccordionItem, Button, Sidebar } from '@foxui/all';

	import { components } from './components_all';

	import Logo from './Logo.svelte';

	let { mobileOnly = false } = $props();

	const handleClick = () => {
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
			href={resolve('/docs/quick-start')}
			class="mb-1 w-full justify-start backdrop-blur-none">Quick Start</Button
		>
		<Button
			data-current={page.url.pathname === `${base}/docs/philosophy`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href={resolve('/docs/philosophy')}
			class="mb-1 w-full justify-start backdrop-blur-none">Philosophy</Button
		>
		<Button
			data-current={page.url.pathname === `${base}/docs/customization`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href={resolve('/docs/customization')}
			class="mb-1 w-full justify-start backdrop-blur-none">Customization</Button
		>
		<Button
			data-current={page.url.pathname === `${base}/docs/haptics`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href={resolve('/docs/haptics')}
			class="mb-1 w-full justify-start backdrop-blur-none">Haptics</Button
		>
		<Button
			data-current={page.url.pathname === `${base}/docs/llms`}
			data-sveltekit-keepfocus
			variant="ghost"
			onclick={handleClick}
			href={resolve('/docs/llms')}
			class="mb-6 w-full justify-start backdrop-blur-none">LLMs</Button
		>

		<Accordion type="multiple" class="w-full" value={components.map((c) => c.href)}>
			{#each components as category (category.href)}
				<AccordionItem
					value={category.href}
					class="border-0"
					title={category.name}
					triggerClasses="text-sm px-3 py-1 font-semibold"
					contentClasses="flex flex-col gap-1 items-start px-1"
				>
					{#each category.components as component (component.href)}
						<Button
							data-current={page.url.pathname === `${base}/components/${category.href}/${component.href}`}
							data-sveltekit-keepfocus
							variant="ghost"
							onclick={handleClick}
							href={resolve(`/components/${category.href}/${component.href}`)}
							class="w-full justify-start backdrop-blur-none">{component.label}</Button
						>
					{/each}
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</Sidebar>
