<script lang="ts" module>
	export const theme = $state({
		dark: false
	});
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Button, { type ButtonProps } from '../button/Button.svelte';

	onMount(() => {
		// load from local storage
		const savedDarkMode = localStorage.getItem('darkMode');
		if (savedDarkMode) {
			theme.dark = JSON.parse(savedDarkMode);
		} else {
			// prefers color scheme?
			theme.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		// remove local storage
		// localStorage.removeItem("darkMode");
		setTheme(theme.dark);

		// recommended method for newer browsers: specify event-type as first argument
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => e.matches && toggleTheme());

		window
			.matchMedia('(prefers-color-scheme: light)')
			.addEventListener('change', (e) => e.matches && toggleTheme());
	});

	function setTheme(dark: Boolean) {
		var root = document.getElementsByTagName('html')[0];

		if (dark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}

	function toggleTheme() {
		theme.dark = !theme.dark;
		// save to local storage
		localStorage.setItem('darkMode', JSON.stringify(theme.dark));
		setTheme(theme.dark);
	}

	const { class: className, ...restProps }: ButtonProps = $props();
</script>

<Button
	variant="link"
	onclick={toggleTheme}
	class={[
		'theme-toggle flex items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-base-900 dark:focus-visible:outline-base-100',
		className
	]}
	{...restProps}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="block !size-6 transition-colors duration-500 dark:hidden"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
		/>
	</svg>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="hidden !size-6 transition-colors duration-500 dark:block dark:text-white"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
		/>
	</svg>

	<span class="sr-only">Toggle theme</span>
</Button>

<noscript>
	<style>
		.theme-toggle {
			display: none;
		}
	</style>
</noscript>
