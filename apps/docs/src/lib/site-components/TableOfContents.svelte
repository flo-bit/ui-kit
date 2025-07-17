<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '@fuxui/base';

	let { class: className } = $props();

	let headings: { id: string; text: string; level: number }[] = $state([]);
	let activeId = $state('');

	onMount(() => {
		const contentElement = document.getElementById('content');
		if (!contentElement) return;

		const headingElements = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
		
		headings = Array.from(headingElements).map((heading, index) => {
			const level = parseInt(heading.tagName.charAt(1));
			let id = heading.id;
			
			// Generate ID if it doesn't exist
			if (!id) {
				id = heading.textContent?.toLowerCase()
					.replace(/[^\w\s-]/g, '')
					.replace(/\s+/g, '-') || `heading-${index}`;
				heading.id = id;
			}
			
			return {
				id,
				text: heading.textContent || '',
				level
			};
		});

		// Set up intersection observer for active section tracking
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{
				rootMargin: '-20% 0% -35% 0%'
			}
		);

		headingElements.forEach((heading) => {
			observer.observe(heading);
		});

		return () => {
			observer.disconnect();
		};
	});

	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

{#if headings.length > 0}
	<nav class={cn('sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto', className)}>
		<div class="text-sm">
			<h4 class="font-semibold text-base-900 dark:text-base-100 mb-3">Sur cette page</h4>
			<ul class="space-y-1">
				{#each headings as heading}
					<li style="margin-left: {(heading.level - 1) * 0.75}rem">
						<button
							onclick={() => scrollToHeading(heading.id)}
							class={cn(
								'block w-full text-left py-1 px-2 rounded text-sm transition-colors hover:bg-base-100 dark:hover:bg-base-800',
								activeId === heading.id
									? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/20'
									: 'text-base-600 dark:text-base-400'
							)}
						>
							{heading.text}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
{/if}