<script lang="ts">
	import { TegakiRenderer } from 'tegaki/svelte';
	import type { TegakiBundle } from 'tegaki';
	import { cn } from '@foxui/core';
	import type { HTMLAttributes } from 'svelte/elements';

	type FontName = 'caveat' | 'italianno' | 'tangerine' | 'parisienne';

	const fontLoaders: Record<FontName, () => Promise<{ default: TegakiBundle }>> = {
		caveat: () => import('tegaki/fonts/caveat'),
		italianno: () => import('tegaki/fonts/italianno'),
		tangerine: () => import('tegaki/fonts/tangerine'),
		parisienne: () => import('tegaki/fonts/parisienne')
	};

	let {
		text,
		font = 'caveat',
		speed = 1,
		loop = true,
		mode = 'uncontrolled',
		progress = 0,
		class: className,
		style,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		text: string;
		font?: FontName | TegakiBundle;
		speed?: number;
		loop?: boolean;
		mode?: 'uncontrolled' | 'controlled';
		progress?: number;
	} = $props();

	let loadedFonts = $state<Partial<Record<FontName, TegakiBundle>>>({});

	const resolvedFont = $derived.by(() => {
		if (typeof font !== 'string') return font;
		const cached = loadedFonts[font];
		if (cached) return cached;
		const name = font;
		fontLoaders[name]().then((m) => {
			loadedFonts = { ...loadedFonts, [name]: m.default };
		});
		return undefined;
	});

	const time = $derived(
		mode === 'controlled'
			? { mode: 'controlled' as const, value: progress, unit: 'progress' as const }
			: { mode: 'uncontrolled' as const, speed, loop }
	);
</script>

{#if resolvedFont}
	<TegakiRenderer
		font={resolvedFont}
		{text}
		{time}
		class={cn('text-base-900 dark:text-base-100', className)}
		{style}
		{...rest}
	/>
{/if}
