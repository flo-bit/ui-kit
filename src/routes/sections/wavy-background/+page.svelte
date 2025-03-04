<script>
	import ThemeToggle from '$lib/components/base/theme-toggle/ThemeToggle.svelte';
	import WavyBackground from '$lib/sections/wavy-background/WavyBackground.svelte';
</script>

<ThemeToggle class="absolute top-4 right-4" />

<WavyBackground>
	<div class="text-base-950 dark:text-base-50 text-8xl font-bold text-center">Hello there</div>
</WavyBackground>
