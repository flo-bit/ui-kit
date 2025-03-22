<script lang="ts">
	import { cn } from '$lib';

	let {
		title = '',
		description = '',
		image = undefined,
		class: className,
		ref = $bindable()
	}: {
		title?: string;
		description?: string;
		image?: string | undefined;
		class?: string;
		ref?: HTMLElement | null;
	} = $props();
</script>

<div
	class={cn(
		'absolute h-full w-full cursor-grab touch-none rounded-2xl border overflow-hidden border-base-800 dark:border-base-200 bg-white ease-in-out select-none',
		className
	)}
	bind:this={ref}
>
	{#key image}
		{#if image}
			<img class="h-full w-full rounded-2xl object-cover" src={image} alt={title} loading="eager" />
		{/if}
	{/key}
	<div class="absolute inset-0 rounded-b-xl bg-gradient-to-t from-white/80 via-transparent"></div>
	<div class="absolute bottom-0 flex w-full justify-start p-8">
		<div class="flex flex-col">
			<h3 class="pb-4 text-3xl font-semibold">{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</div>
