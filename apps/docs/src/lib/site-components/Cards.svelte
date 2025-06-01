<script lang="ts">
	import { base } from '$app/paths';
	import { cn } from '@fuxui/base';

	import { components } from './components_all';
</script>

<div class="flex w-full flex-col gap-32">
	{#each components as category}
		<div id={category.name} class="scroll-mt-24">
			<h2 class="text-base-800 dark:text-base-200 mb-12 text-xl font-semibold">{category.name}</h2>
			<div class="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
				{#each category.components as card}
					<div
						class="group relative flex flex-col items-start gap-3 transition-opacity duration-150 hover:opacity-90 md:gap-4"
					>
						<div
							class="bg-base-50 dark:bg-base-900/30 border-base-200 dark:border-base-900 pointer-events-none relative h-44 w-full overflow-hidden rounded-2xl border"
						>
							<div
								class={cn(
									'absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 p-6 transition-transform duration-300 will-change-transform group-hover:scale-103',
									card.className
								)}
								aria-hidden="true"
								tabindex="-1"
							>
								<card.component />
							</div>
						</div>
						<a
							href={base + `/components/${category.href}/${card.href}`}
							class="focus-visible:outline-accent-500 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
						>
							<span
								class="text-base-900 dark:text-base-50 group-hover:text-accent-600 group-hover:dark:text-accent-400 mx-2 text-sm font-semibold transition-colors duration-150"
								>{card.label}</span
							>
							<span class="absolute inset-0"></span>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
