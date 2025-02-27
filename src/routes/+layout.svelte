<script lang="ts">
	import { Toaster } from '$lib/components/sonner';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<Toaster />