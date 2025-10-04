<script lang="ts">
	import { Avatar, Button, cn } from '@foxui/core';

	let { profile, class: className }: { profile: {
		banner?: string;
		avatar?: string;
		displayName?: string;
		handle?: string;
		description?: string;
	}, class: string; } = $props();
</script>

{#if profile}
	<div class={cn("mx-auto max-w-full sm:max-w-2xl sm:py-6", className)}>
		<div>
			{#if profile.banner}
				<img
					class="aspect-[3/1] w-full border-b border-base-800 object-cover sm:rounded-xl sm:border"
					src={profile.banner}
					alt=""
				/>
			{:else}
				<div class="aspect-[8/1] w-full"></div>
			{/if}
		</div>
		<div
			class={cn(
				profile.banner ? '-mt-11' : '-mt-8',
				'flex max-w-full items-end space-x-5 px-4 sm:-mt-16 sm:px-6 lg:px-8'
			)}
		>
			<Avatar src={profile.avatar} class="border-base-50 dark:border-base-950 border-2 size-24 sm:size-32" />
			<div
				class="flex min-w-0 flex-1 flex-row sm:flex-row sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
			>
				<div
					class={cn(
						profile.banner ? 'mt-4 sm:mt-0' : '-mt-[4.5rem] sm:-mt-[6.5rem]',
						'flex min-w-0 max-w-full flex-1 flex-col items-baseline'
					)}
				>
					<h1
						class="max-w-full truncate text-lg font-bold text-base-900 dark:text-base-100 sm:text-xl"
					>
						{profile.displayName || profile.handle}
					</h1>
					<div class="truncate text-xs text-base-900 dark:text-base-400 sm:text-sm">
						{profile.handle}
					</div>
				</div>
			</div>

			<!-- <Button>Follow</Button> -->
		</div>

		<div class="px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-base-800 dark:text-base-200">
			{@html profile.description?.replaceAll('\n', '<br/>')}
		</div>
	</div>
{/if}
