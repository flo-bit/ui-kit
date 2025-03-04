<script lang="ts">
	import ScrollArea from '$lib/components/base/scroll-area/ScrollArea.svelte';
	import { cn } from '$lib/utils';

	let background = 'bg-base-100 dark:bg-base-900 border border-base-200 dark:border-base-800';
	let accentBackground =
		'bg-accent-500/5 dark:bg-accent-500/5 border border-accent-500/20 dark:border-accent-500/20';
</script>

{#snippet Card({ title, class: className }: { title: string; class?: string })}
	<div
		class={cn(
			'flex h-full min-h-24 w-full items-center justify-center text-xl font-bold',
			className
		)}
	>
		{title}
	</div>
{/snippet}

<ScrollArea type="scroll" class="h-[100dvh] w-screen">
	<div class="flex min-h-screen items-center justify-center p-8">
		<div class="text-base-900 dark:text-base-50 h-full w-full max-w-5xl">
			<div
				class={[
					'mb-6 flex w-full items-start justify-between rounded-2xl p-6 md:items-center',
					background
				]}
			>
				{@render Card({ title: 'title', class: 'min-h-4' })}
			</div>
			<div class="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-5">
				<div
					class={[
						'order-1 col-span-1 row-span-2 flex w-full flex-col items-start justify-between rounded-2xl p-6 md:col-span-5',
						accentBackground
					]}
				>
					{@render Card({ title: '1' })}
				</div>
				<div
					class={[
						'order-6 col-span-1 row-span-2 min-h-60 overflow-hidden rounded-2xl p-6 md:order-2 md:col-span-3',
						background
					]}
				>
					{@render Card({ title: '2' })}
				</div>

				<div
					class="order-2 col-span-1 row-span-5 flex w-full flex-col gap-6 md:order-3 md:col-span-4"
				>
					<div class={['grow rounded-2xl p-6', accentBackground]}>
						{@render Card({ title: '3' })}
					</div>

					<div class={['flex flex-col items-start justify-end gap-4 rounded-2xl p-6', background]}>
						{@render Card({ title: '4', class: 'min-h-0' })}
					</div>
				</div>

				<div class={['order-5 col-span-1 row-span-3 rounded-2xl p-6 md:col-span-4', background]}>
					{@render Card({ title: '5' })}
				</div>
				<div class={['order-6 col-span-1 row-span-3 rounded-2xl p-6 md:col-span-4', background]}>
					{@render Card({ title: '6' })}
				</div>
			</div>
		</div>
	</div>
</ScrollArea>
