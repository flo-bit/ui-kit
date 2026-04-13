<script lang="ts">
	import { Button, type ButtonProps } from '../button';
	import { cn } from '../../utils';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Sun, Moon } from '@lucide/svelte';

	let {
		class: className,
		ref = $bindable(null),
		defaultMode = 'system',
		...restProps
	}: ButtonProps & {
		defaultMode?: 'light' | 'dark' | 'system';
	} = $props();
</script>

<ModeWatcher {defaultMode} />

<Button
	variant="link"
	onclick={toggleMode}
	class={cn(
		'theme-toggle focus-visible:outline-base-900 dark:focus-visible:outline-base-100 flex items-center justify-center rounded-ui focus-visible:outline-2',
		className
	)}
	bind:ref
	{...restProps}
	size="icon"
>
	<Sun size={20} strokeWidth={1.5} class="block dark:hidden" />
	<Moon size={20} strokeWidth={1.5} class="hidden dark:block" />

	<span class="sr-only">Toggle theme</span>
</Button>

<noscript>
	<style>
		.theme-toggle {
			display: none;
		}
	</style>
</noscript>
