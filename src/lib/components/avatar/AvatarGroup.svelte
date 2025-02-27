<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Avatar } from '.';

	let {
		users,
		ref = $bindable(null),

		avatarClass,
		imageClass,
		fallbackClass,

		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		avatarClass?: string;
		imageClass?: string;
		fallbackClass?: string;

		users: {
			src?: string;
			alt?: string;
			fallback?: string;
		}[];

		class?: string;
	} = $props();
</script>

<div class={['flex -space-x-2 overflow-hidden', className]} bind:this={ref} {...restProps}>
	{#each users as user}
		<Avatar
			src={user.src}
			alt={user.alt}
			fallback={user.fallback}
			class={['border-50 border-2 dark:border-base-950', avatarClass]}
			{imageClass}
			{fallbackClass}
		/>
	{/each}
</div>
